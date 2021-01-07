import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {IntroductionComponent} from './introduction/introduction.component'; 
import {EducationComponent} from './education/education.component'; 
import { WorkExpComponent } from './work-exp/work-exp.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {ProjectsComponent} from './projects/projects.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const appRoutes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'home', component: IntroductionComponent},
  { path: 'education', component: EducationComponent}, 
  { path: 'work-exp', component: WorkExpComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'about-me', component: AboutMeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
      )],
  exports: [RouterModule]
})
export class AppRoutingModule { }