import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../service/user.service';
import {User} from '../../../../model/user';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }
}
