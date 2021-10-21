import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {RegisterComponent} from './component/register/register.component';
import {LoginComponent} from './component/login/login.component';
import {AdminHomeComponent} from './component/admin/admin-home/admin-home.component';
import {ProfilComponent} from './component/profil/profil.component';
import {ArticleShowComponent} from './component/article/article-show/article-show.component';
import {ArticleEditComponent} from './component/article/article-edit/article-edit.component';
import {ArticleCreateComponent} from './component/article/article-create/article-create.component';
import {LoginActivate} from '../service/auth/login-activate';
import {Page404Component} from './component/PageNotFound/page404/page404.component';

const routes: Routes = [
  {path: 'article/edit/:id', component: ArticleEditComponent},
  {path: 'article/create', component: ArticleCreateComponent, canActivate: [LoginActivate]},
  {path: 'article/show', component: ArticleShowComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin-home', component: AdminHomeComponent},
  {path: 'profil', component: ProfilComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: Page404Component}
  // { path: 'test',   redirectTo: '/test-component', pathMatch: 'full' }, // redirection
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
