import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {IntroductionComponent} from './introduction/introduction.component'; 
import {EducationComponent} from './education/education.component'; 
import { WorkExpComponent } from './work-exp/work-exp.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {ProjectsComponent} from './projects/projects.component';


const routes: Routes = [
  { path: 'introduction', component: IntroductionComponent},
  { path: 'education', component: EducationComponent}, 
  { path: 'work-exp', component: WorkExpComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'about-me', component: AboutMeComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }