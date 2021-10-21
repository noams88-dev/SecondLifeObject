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
import { ProfilComponent } from './component/profil/profil.component';
import { InfosComponent } from './component/profil/infos/infos.component';
import { InfosEditComponent } from './component/profil/infos-edit/infos-edit.component';
import { ArticleShowComponent } from './component/article/article-show/article-show.component';
import { ArticleEditComponent } from './component/article/article-edit/article-edit.component';
import { ArticleCreateComponent } from './component/article/article-create/article-create.component';
import { LoginActivate } from '../service/auth/login-activate';
import { TestDirective } from './directive/test.directive';
import { Page404Component } from './component/PageNotFound/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AdminHomeComponent,
    NavbarComponent,
    ProfilComponent,
    InfosComponent,
    InfosEditComponent,
    ArticleShowComponent,
    ArticleEditComponent,
    ArticleCreateComponent,
    TestDirective,
    Page404Component
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
    LoginActivate
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
