import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { EducationComponent } from './education/education.component';
import { WorkExperianceComponent } from './work-experiance/work-experiance.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContectComponent } from './contect/contect.component';
import {LayoutModule} from '@angular/cdk/layout';
import { ResponsiveDirective } from './directives/responsive.directive';
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    PersonalInformationComponent,
    EducationComponent,
    WorkExperianceComponent,
    SkillsComponent,
    ProjectsComponent,
    ContectComponent,
    ResponsiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
