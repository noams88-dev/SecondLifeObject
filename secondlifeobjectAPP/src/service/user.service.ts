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

  constructor(private httpClient: HttpClient) { }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.apiServerUrl}/api/user/find/${id}`);
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiServerUrl}/api/user/all`);
  }

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.apiServerUrl}/api/user/add`, user);
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.apiServerUrl}/api/user/update`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiServerUrl}/api/user/delete/${id}`);
  }
}
