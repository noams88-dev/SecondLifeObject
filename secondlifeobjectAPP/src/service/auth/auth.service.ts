import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {JwtResponse} from './jwt-response';
import {SignInInfo} from './signin-info';
import {SignUpInfo} from './signup-info';
import {environment} from '../../environments/environment';
import {User} from '../../model/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  signIn(credentials: SignInInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(`${this.apiServerUrl}/api/auth/signin`, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(`${this.apiServerUrl}/api/auth/signup`, info, httpOptions);
  }

  getConnectedUser(token: string): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/api/auth/infoUser`, token);
  }
}
