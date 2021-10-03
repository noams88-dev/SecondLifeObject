import {Component, OnInit, Output} from '@angular/core';
import {TokenStorageService} from '../service/auth/token-storage.service';
import {User} from '../model/user';
import {AuthService} from '../service/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'SecondLifeObject';
  authority: string;

  @Output()
  connectedUser: User;

  constructor(private tokenStorage: TokenStorageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getUserWithRequest();
    // deux méthodes pour le même résultat : à choisir
    // this.getUserWithToken();
  }

  getUserWithRequest(): void {
    this.authService.getConnectedUser(this.tokenStorage.getToken()).subscribe(
      (connectedUser: User) => {
        this.connectedUser = connectedUser;

        const roles: string[] = [];
        connectedUser.roles.forEach(element => roles.push(element.name));

        if (roles.includes('ROLE_ADMIN')) {
          this.authority = 'ADMIN';
        }
        else if (roles.includes('ROLE_PM')) {
          this.authority = 'PM';
        }
        else {
          this.authority = 'USER';
        }
      }
    );
  }

  getUserWithToken(): void {
    let roles;
    if (this.tokenStorage.getToken()) {
      roles = this.tokenStorage.getAuthorities();
      roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'ADMIN';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'PM';
          return false;
        }
        this.authority = 'USER';
        return true;
      });
    }
  }
}
