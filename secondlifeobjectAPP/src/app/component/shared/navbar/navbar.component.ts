import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../../../service/auth/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  authority: string;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.getUserWithToken();
  }

  getUserWithToken(): void {
    if (this.tokenStorage.getToken()) {
      const roles: string[] = this.tokenStorage.getRoles();
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
  }
}
