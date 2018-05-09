import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from '../app/app.component';
import {Project1Component} from './project1/project1.component';
import {Project2Component} from './project2/project2.component';
import {Project3Component} from './project3/project3.component';
import {Project4Component} from './project4/project4.component';
import {Project5Component} from './project5/project5.component';
import {AboutComponent} from './about/about.component';

import {ProjectViewComponent} from './project-view/project-view.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'tdc',
        component: Project1Component
      },
      {
        path: 'deploy',
        component: Project2Component
      },
      {
        path: 'saturn',
        component: Project3Component
      },
      {
        path: 'workshop',
        component: Project4Component
      },
      {
        path: 'calm',
        component: Project5Component
      },
      {
       path:'about',
        component:AboutComponent
      }
];

export const routing = RouterModule.forRoot(appRoutes);
