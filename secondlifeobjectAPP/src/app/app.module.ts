import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './component/home/home.component';
import {UserService} from '../service/user.service';
import {ArticleService} from '../service/article.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RegisterComponent} from './component/register/register.component';
import {LoginComponent} from './component/login/login.component';
import {AdminHomeComponent} from './component/admin/admin-home/admin-home.component';
import {httpInterceptorProviders} from '../service/auth/auth-interceptor';
import { NavbarComponent } from './component/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AdminHomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    httpInterceptorProviders,
    UserService,
    ArticleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
