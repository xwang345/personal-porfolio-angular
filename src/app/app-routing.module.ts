import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsPageComponent } from './pages/project-page/project-page.component';
import { IntroductionPageComponent } from './pages/introduction-page/introduction-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { TodayPageComponent } from './pages/today-page/today-page.component';
import { ToastComponent } from 'ng-snotify';

const routes: Routes = [
  { path: 'welcome', component: IntroductionPageComponent },
  { path: 'project-page', component: ProjectsPageComponent },
  { path: 'skills-page', component: SkillsPageComponent },
  { path: 'experience-page', component: ExperiencePageComponent },
  { path: 'today-page', component: TodayPageComponent },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' } // Catch-all redirect needs to be last in the routes.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [ProjectsPageComponent, SkillsPageComponent, TodayPageComponent];
