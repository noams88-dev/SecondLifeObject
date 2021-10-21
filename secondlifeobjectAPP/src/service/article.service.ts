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
  private urlBody = '/api/article';

  constructor(private httpClient: HttpClient) { }

  get(id: number): Observable<Article> {
    return this.httpClient.get<Article>(`${this.apiServerUrl}${this.urlBody}/get/${id}`);
  }

  getAll(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(`${this.apiServerUrl}${this.urlBody}/all`);
  }

  add(article: Article): Observable<Article> {
    return this.httpClient.post<Article>(`${this.apiServerUrl}${this.urlBody}/add`, article);
  }

  update(article: Article): Observable<Article> {
    return this.httpClient.put<Article>(`${this.apiServerUrl}${this.urlBody}/update`, article);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiServerUrl}${this.urlBody}/delete/${id}`);
  }
}
