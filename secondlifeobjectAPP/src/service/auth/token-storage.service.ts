import {Injectable} from '@angular/core';

const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY) as string;
  }

  getUsername(): string {
    return JSON.parse(atob(this.getToken().split('.')[1])).sub;
  }

  getRoles(): string[] {
    return JSON.parse(atob(this.getToken().split('.')[1])).roles;
  }

  getExpirationToken(): string[] {
    return JSON.parse(atob(this.getToken().split('.')[1])).exp;
  }
}
