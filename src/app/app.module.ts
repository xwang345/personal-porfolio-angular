import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsPageComponent } from './pages/project-page/project-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroductionPageComponent } from './pages/introduction-page/introduction-page.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodayPageComponent } from './pages/today-page/today-page.component';
import { WeatherService } from './weather.service';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionPageComponent,
    ProjectsPageComponent,
    SkillsPageComponent,
    NavbarComponent,
    FooterComponent,
    JumbotronComponent,
    ExperiencePageComponent,
    TodayPageComponent
  ],
  imports: [BrowserModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            HttpClientModule,
            AgmCoreModule.forRoot({
              apiKey: 'AIzaSyAyskDO_D4K3xFVNpHHBxOZnCNVXqhWl0c'
            })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
