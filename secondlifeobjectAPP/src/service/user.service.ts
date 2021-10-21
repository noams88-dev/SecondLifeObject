import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl = environment.apiBaseUrl;
  private urlBody = '/api/user';

  constructor(private httpClient: HttpClient) { }

  get(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.apiServerUrl}${this.urlBody}/get/${id}`);
  }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiServerUrl}${this.urlBody}/all`);
  }

  add(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.apiServerUrl}${this.urlBody}/add`, user);
  }

  update(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.apiServerUrl}${this.urlBody}/update`, user);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiServerUrl}${this.urlBody}/delete/${id}`);
  }
}
