import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {JwtResponse} from './jwt-response';
import {SignInInfo} from './signin-info';
import {SignUpInfo} from './signup-info';
import {environment} from '../../environments/environment';
import {User} from '../../model/user';
import {TokenStorageService} from './token-storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiServerUrl = environment.apiBaseUrl;
  private urlBody = '/api/auth';

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  signIn(credentials: SignInInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(`${this.apiServerUrl}${this.urlBody}/signin`, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(`${this.apiServerUrl}${this.urlBody}/signup`, info, httpOptions);
  }

  getUser(): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}${this.urlBody}/getUser`, this.tokenStorage.getToken());
  }
}
