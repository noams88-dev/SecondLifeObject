import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from '../model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { }

  getArticle(id: number): Observable<Article> {
    return this.httpClient.get<Article>(`${this.apiServerUrl}/api/article/find/${id}`);
  }

  getAllArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(`${this.apiServerUrl}/api/article/all`);
  }

  addArticle(article: Article): Observable<Article> {
    return this.httpClient.post<Article>(`${this.apiServerUrl}/api/article/add`, article);
  }

  updateArticle(article: Article): Observable<Article> {
    return this.httpClient.put<Article>(`${this.apiServerUrl}/api/article/update`, article);
  }

  deleteArticle(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiServerUrl}/api/article/delete/${id}`);
  }
}
