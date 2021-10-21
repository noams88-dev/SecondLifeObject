import {Component, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../../model/user';
import {UserService} from '../../../../service/user.service';
import {HttpErrorResponse} from '@angular/common/http';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-infos-edit',
  templateUrl: './infos-edit.component.html',
  styleUrls: ['./infos-edit.component.css']
})
export class InfosEditComponent implements OnInit {

  @Input() user: User;
  @Output() event = new EventEmitter<string>();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  changeTemplate(value: string): void {
    this.onSubmit();
    this.event.emit(value);
  }

  onSubmit(): void {
    const slit = this.user.imageUrl.split('.');
    const m = Date.now().toString() + Math.floor(Math.random() * 1000000).toString();

    this.user.imageUrl = m + '.' + slit[slit.length - 1];
    this.userService.update(this.user).subscribe(
      (user: User) => {
        console.log(user);
        this.user = user;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }
}
