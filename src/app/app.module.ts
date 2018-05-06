import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { HttpModule } from '@angular/http';
import {HttpHeaders} from "@angular/common/http";

import { AppComponent } from './app.component';
import { AnimalComponent } from './animal/animal.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { AuthenticationComponent } from './aaauth/authentication/authentication.component';
import { SigninComponent } from './aaauth/signin/signin.component';
import { SignupComponent } from './aaauth/signup/signup.component';
import { LogoutComponent } from './aaauth/logout/logout.component';
import {AuthService} from "./aaauth/auth.service";




const appRoutes: Routes = [
  {
    path: 'animals',
    component: AnimalComponent ,
    data: { title: 'animal' }
  },

  {
    path :'login',
    component: SigninComponent
  },

  {
    path :'register',
    component: SignupComponent
  },

  {
    path :'logout',
    component: LogoutComponent
  },
  {
    path:'animal-details/:id',
    component:AnimalDetailsComponent,
    data: {title: 'Animal details'}
  },
  {
    path:'add-animal',
    component:AddAnimalComponent,
    data:{title: 'Add animal'}

  },

  {
    path:'edit-animal/:id',
    component:EditAnimalComponent,
    data:{title: 'Edit animal'}
  },

  {
    path:'search-result',
    component:SearchResultComponent,
    data:{title: 'Search result'}
  },





  { path: '',
    redirectTo: '/animals',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    HeaderComponent,
    AnimalDetailsComponent,
    AddAnimalComponent,
    EditAnimalComponent,
    SearchResultComponent,
    AuthenticationComponent,
    SigninComponent,
    SignupComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    DataTablesModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
