# #!/bin/bash

# # ----------------------
# # KUDU Deployment Script
# # Version: 1.0.17
# # ----------------------

# # Helpers
# # -------

# exitWithMessageOnError () {
#   if [ ! $? -eq 0 ]; then
#     echo "An error has occurred during web site deployment."
#     echo $1
#     exit 1
#   fi
# }

# # Prerequisites
# # -------------

# # Verify node.js installed
# hash node 2>/dev/null
# exitWithMessageOnError "Missing node.js executable, please install node.js, if already installed make sure it can be reached from current environment."

# # Setup
# # -----

# SCRIPT_DIR="${BASH_SOURCE[0]%\\*}"
# SCRIPT_DIR="${SCRIPT_DIR%/*}"
# ARTIFACTS=$SCRIPT_DIR/../artifacts
# KUDU_SYNC_CMD=${KUDU_SYNC_CMD//\"}

# if [[ ! -n "$DEPLOYMENT_SOURCE" ]]; then
#   DEPLOYMENT_SOURCE=$SCRIPT_DIR
# fi

# if [[ ! -n "$NEXT_MANIFEST_PATH" ]]; then
#   NEXT_MANIFEST_PATH=$ARTIFACTS/manifest

#   if [[ ! -n "$PREVIOUS_MANIFEST_PATH" ]]; then
#     PREVIOUS_MANIFEST_PATH=$NEXT_MANIFEST_PATH
#   fi
# fi

# if [[ ! -n "$DEPLOYMENT_TARGET" ]]; then
#   DEPLOYMENT_TARGET=$ARTIFACTS/wwwroot
# else
#   KUDU_SERVICE=true
# fi

# if [[ ! -n "$KUDU_SYNC_CMD" ]]; then
#   # Install kudu sync
#   echo Installing Kudu Sync
#   npm install kudusync -g --silent
#   exitWithMessageOnError "npm failed"

#   if [[ ! -n "$KUDU_SERVICE" ]]; then
#     # In case we are running locally this is the correct location of kuduSync
#     KUDU_SYNC_CMD=kuduSync
#   else
#     # In case we are running on kudu service this is the correct location of kuduSync
#     KUDU_SYNC_CMD=$APPDATA/npm/node_modules/kuduSync/bin/kuduSync
#   fi
# fi

# # Node Helpers
# # ------------

# selectNodeVersion () {
#   if [[ -n "$KUDU_SELECT_NODE_VERSION_CMD" ]]; then
#     SELECT_NODE_VERSION="$KUDU_SELECT_NODE_VERSION_CMD \"$DEPLOYMENT_SOURCE\" \"$DEPLOYMENT_TARGET\" \"$DEPLOYMENT_TEMP\""
#     eval $SELECT_NODE_VERSION
#     exitWithMessageOnError "select node version failed"

#     if [[ -e "$DEPLOYMENT_TEMP/__nodeVersion.tmp" ]]; then
#       NODE_EXE=`cat "$DEPLOYMENT_TEMP/__nodeVersion.tmp"`
#       exitWithMessageOnError "getting node version failed"
#     fi
    
#     if [[ -e "$DEPLOYMENT_TEMP/__npmVersion.tmp" ]]; then
#       NPM_JS_PATH=`cat "$DEPLOYMENT_TEMP/__npmVersion.tmp"`
#       exitWithMessageOnError "getting npm version failed"
#     fi

#     if [[ ! -n "$NODE_EXE" ]]; then
#       NODE_EXE=node
#     fi

#     NPM_CMD="\"$NODE_EXE\" \"$NPM_JS_PATH\""
#   else
#     NPM_CMD=npm
#     NODE_EXE=node
#   fi
# }

# ##################################################################################################################################
# # Deployment
# # ----------

# echo Handling node.js deployment.

# # 1. KuduSync
# if [[ "$IN_PLACE_DEPLOYMENT" -ne "1" ]]; then
#   "$KUDU_SYNC_CMD" -v 50 -f "$DEPLOYMENT_SOURCE" -t "$DEPLOYMENT_TARGET" -n "$NEXT_MANIFEST_PATH" -p "$PREVIOUS_MANIFEST_PATH" -i ".git;.hg;.deployment;deploy.sh"
#   exitWithMessageOnError "Kudu Sync failed"
# fi

# # 2. Select node version
# selectNodeVersion

# # 3. Install npm packages
# if [ -e "$DEPLOYMENT_TARGET/package.json" ]; then
#   cd "$DEPLOYMENT_TARGET"
#   echo "Running $NPM_CMD install --production"
#   eval $NPM_CMD install --production
#   exitWithMessageOnError "npm failed"
#   cd - > /dev/null
# fi

# ##################################################################################################################################
# echo "Finished successfully."

@if "%SCM_TRACE_LEVEL%" NEQ "4" @echo off

:: ----------------------
:: KUDU Deployment Script
:: Version: 1.0.15
:: ----------------------

:: Prerequisites
:: -------------

:: Verify node.js installed
where node 2>nul >nul
IF %ERRORLEVEL% NEQ 0 (
  echo Missing node.js executable, please install node.js, if already installed make sure it can be reached from current environment.
  goto error
)

:: Setup
:: -----

setlocal enabledelayedexpansion

SET ARTIFACTS=%~dp0%..\artifacts

IF NOT DEFINED DEPLOYMENT_SOURCE (
  SET DEPLOYMENT_SOURCE=%~dp0%.
)

IF NOT DEFINED DEPLOYMENT_TARGET (
  SET DEPLOYMENT_TARGET=%ARTIFACTS%\wwwroot
)

IF NOT DEFINED NEXT_MANIFEST_PATH (
  SET NEXT_MANIFEST_PATH=%ARTIFACTS%\manifest

  IF NOT DEFINED PREVIOUS_MANIFEST_PATH (
    SET PREVIOUS_MANIFEST_PATH=%ARTIFACTS%\manifest
  )
)

IF NOT DEFINED KUDU_SYNC_CMD (
  :: Install kudu sync
  echo Installing Kudu Sync
  call npm install kudusync -g --silent
  IF !ERRORLEVEL! NEQ 0 goto error

  :: Locally just running "kuduSync" would also work
  SET KUDU_SYNC_CMD=%appdata%\npm\kuduSync.cmd
)
goto Deployment

:: Utility Functions
:: -----------------

:SelectNodeVersion

IF DEFINED KUDU_SELECT_NODE_VERSION_CMD (
  :: The following are done only on Windows Azure Websites environment
  call %KUDU_SELECT_NODE_VERSION_CMD% "%DEPLOYMENT_SOURCE%" "%DEPLOYMENT_TARGET%" "%DEPLOYMENT_TEMP%"
  IF !ERRORLEVEL! NEQ 0 goto error

  IF EXIST "%DEPLOYMENT_TEMP%\__nodeVersion.tmp" (
    SET /p NODE_EXE=<"%DEPLOYMENT_TEMP%\__nodeVersion.tmp"
    IF !ERRORLEVEL! NEQ 0 goto error
  )
  
  IF EXIST "%DEPLOYMENT_TEMP%\__npmVersion.tmp" (
    SET /p NPM_JS_PATH=<"%DEPLOYMENT_TEMP%\__npmVersion.tmp"
    IF !ERRORLEVEL! NEQ 0 goto error
  )

  IF NOT DEFINED NODE_EXE (
    SET NODE_EXE=node
  )

  SET NPM_CMD="!NODE_EXE!" "!NPM_JS_PATH!"
) ELSE (
  SET NPM_CMD=npm
  SET NODE_EXE=node
)

goto :EOF

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:: Deployment
:: ----------

:Deployment
echo Handling node.js deployment.

:: 1. KuduSync
IF /I "%IN_PLACE_DEPLOYMENT%" NEQ "1" (
  call :ExecuteCmd "%KUDU_SYNC_CMD%" -v 50 -f "%DEPLOYMENT_SOURCE%" -t "%DEPLOYMENT_TARGET%" -n "%NEXT_MANIFEST_PATH%" -p "%PREVIOUS_MANIFEST_PATH%" -i ".git;.hg;.deployment;deploy.cmd"
  IF !ERRORLEVEL! NEQ 0 goto error
)

:: 2. Select node version
call :SelectNodeVersion

:: 3. Install npm packages
IF EXIST "%DEPLOYMENT_TARGET%\package.json" (
  pushd "%DEPLOYMENT_TARGET%"
  call :ExecuteCmd !NPM_CMD! install --production
  IF !ERRORLEVEL! NEQ 0 goto error
  popd
)

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
goto end

:: Execute command routine that will echo out when error
:ExecuteCmd
setlocal
set _CMD_=%*
call %_CMD_%
if "%ERRORLEVEL%" NEQ "0" echo Failed exitCode=%ERRORLEVEL%, command=%_CMD_%
exit /b %ERRORLEVEL%

:error
endlocal
echo An error has occurred during web site deployment.
call :exitSetErrorLevel
call :exitFromFunction 2>nul

:exitSetErrorLevel
exit /b 1

:exitFromFunction
()

:end
endlocal
echo Finished successfully.