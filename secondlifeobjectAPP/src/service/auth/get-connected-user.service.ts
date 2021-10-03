import {Injectable} from '@angular/core';
import {User} from '../../model/user';
import {AuthService} from './auth.service';
import {TokenStorageService} from './token-storage.service';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetConnectedUserService {

  connectedUser: User;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  // getConnectedUserTest(): User {
  //   const test: User = new User();
  //   this.connectedUser = this.authService.getConnectedUser(this.tokenStorage.getToken()).subscribe(
  //     (response: User) => {
  //       test = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     },
  //     () => {
  //       return test;
  //     }
  //   );
  // }
}
