import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { RegistrLoginComponent } from './registr-login/registr-login.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WorksComponent,
    MySkillsComponent,
    RegistrLoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
