import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../service/auth/auth.service';
import {User} from '../../../model/user';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user = new User();
  test = 'show';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.authService.getUser().subscribe(
      data => {
        this.user = data;
        // console.log(this.user);
      },
      error => {
        console.log(error);
      }
    );
  }

  changeTemplate(value: string): void {
    console.log(value);
    this.test = value;
  }
}
