import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboutProjectsComponent } from './components/about-projects/about-projects.component';
import { AboutSkillsComponent } from './components/about-skills/about-skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ParticleEffectButtonModule } from 'angular-particle-effect-button';
import { MainNavComponent } from './components/navigations/main-nav/main-nav.component';
import { SideNavComponent } from './components/navigations/side-nav/side-nav.component';
import { BubblesComponent } from './components/about-skills/bubbles/bubbles.component';
import { AboutMeDialogComponent } from './components/about-me/about-me-dialog/about-me-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material';
import { AboutProjectsDialogComponent } from './components/about-projects/about-projects-dialog/about-projects-dialog.component';
import { AboutSkillsDialogComponent } from './components/about-skills/about-skills-dialog/about-skills-dialog.component';
import {MainServiceService} from './shared/services/main-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    AboutProjectsComponent,
    AboutSkillsComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    MainNavComponent,
    SideNavComponent,
    BubblesComponent,
    AboutMeDialogComponent,
    AboutProjectsDialogComponent,
    AboutSkillsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticleEffectButtonModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [
    MainServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
