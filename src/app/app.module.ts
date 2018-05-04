import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';


import { AppComponent } from './app.component';
import { AnimalComponent } from './animal/animal.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';



const appRoutes: Routes = [
  {
    path: 'animals',
    component: AnimalComponent ,
    data: { title: 'animal' }
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

  {
    path: 'auth',
    component: AuthComponent
  },

  {
    path: 'auth/login',
    component: LoginComponent
  },

  {
    path: 'auth/register',
    component: RegisterComponent
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
    AuthComponent,
    LoginComponent,
    RegisterComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
