import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectViewComponent } from './project-view/project-view.component';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { Project1Component } from './project1/project1.component';
import { Project2Component } from './project2/project2.component';
import { ProjectComponent } from './project/project.component';
import { Project3Component } from './project3/project3.component';
import { Project4Component } from './project4/project4.component';
import { AboutComponent } from './about/about.component';
import { Project5Component } from './project5/project5.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProjectViewComponent,
    HomeComponent,
    Project1Component,
    Project2Component,
    ProjectComponent,
    Project3Component,
    Project4Component,
    AboutComponent,
    Project5Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
