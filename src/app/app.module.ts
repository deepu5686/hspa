import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

const appRoutes: Routes=[
  {path: '', component: PropertyListComponent},
  {path: '', component: PropertyListComponent},
  {path: 'rent-property', component: PropertyListComponent},
  {path: 'add-property', component: AddPropertyComponent},
  {path: 'property-details/:id', component: PropertyDetailsComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    PropertyCardComponent,
    PropertyDetailsComponent,
    AddPropertyComponent,
    NavBarComponent,
    PageNotFoundComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
