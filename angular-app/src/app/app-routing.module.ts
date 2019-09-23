import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodingChallengesPageComponent } from './pages/coding-challenges-page/coding-challenges-page.component';
import { IntroductionPageComponent } from './pages/introduction-page/introduction-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';

const routes: Routes = [
  { path: 'welcome', component: IntroductionPageComponent },
  { path: 'coding-challenges', component: CodingChallengesPageComponent },
  { path: 'skills-page', component: SkillsPageComponent },
  { path: 'experience-page', component: ExperiencePageComponent },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' } // Catch-all redirect needs to be last in the routes.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [CodingChallengesPageComponent, SkillsPageComponent];
