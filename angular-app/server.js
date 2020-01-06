const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/dist"));

app.listen(process.env.PORT || 8080);

app.get("/*", function (req, res) {
  res.sendFile(
    path.join(__dirname + "/dist/personal-portfolio-angular/index.html")
  );
});

console.log("Application is running!!!");
