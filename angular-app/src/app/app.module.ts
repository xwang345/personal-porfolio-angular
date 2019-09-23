import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodingChallengesPageComponent } from './pages/coding-challenges-page/coding-challenges-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroductionPageComponent } from './pages/introduction-page/introduction-page.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionPageComponent,
    CodingChallengesPageComponent,
    SkillsPageComponent,
    NavbarComponent,
    FooterComponent,
    JumbotronComponent,
    ExperiencePageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
