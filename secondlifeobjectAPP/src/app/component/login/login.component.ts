import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../service/auth/auth.service';
import {TokenStorageService} from '../../../service/auth/token-storage.service';
import {SignInInfo} from '../../../service/auth/signin-info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  token: string;
  username: string;
  roles: string[];
  private loginInfo: SignInInfo;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;

      this.token = this.tokenStorage.getToken();
      this.username = this.tokenStorage.getUsername();
      this.roles = this.tokenStorage.getRoles();
    }
  }

  onSubmit(): void {
    this.loginInfo = new SignInInfo(
      this.form.username,
      this.form.password
    );

    this.authService.signIn(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        window.location.reload();
      },
      error => {
        console.log(error);
        this.isLoginFailed = true;
      }
    );
  }
}
