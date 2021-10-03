import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../../service/user.service';
import {User} from '../../../../model/user';
import {HttpErrorResponse} from '@angular/common/http';
import {TokenStorageService} from '../../../../service/auth/token-storage.service';
import {AuthService} from '../../../../service/auth/auth.service';
import {GetConnectedUserService} from '../../../../service/auth/get-connected-user.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  // connectedUser: User;
  user: User;
  users: User[];
  // connectedUser = this.getConnectedUserService.connectedUser;
  // editUser: User;
  // deleteUser: User;

  constructor(private userService: UserService, private tokenStorage: TokenStorageService, private authService: AuthService,
              private getConnectedUserService: GetConnectedUserService) {
  }

  ngOnInit(): void {
    // this.getConnectedUserService.getConnectedUserTest();
    // this.getConnectedUser();
  }

  // getConnectedUser(): void {
  //   this.authService.getConnectedUser(this.tokenStorage.getToken()).subscribe(
  //     (response: User) => {
  //       this.connectedUser = response;
  //     }
  //   );
  // }

  // getUser(): void {
  //   this.authService.getMyProfil(this.tokenStorage.getToken()).subscribe(
  //     (response: User) => {
  //       this.user = response;
  //       console.log('Infos de l\'utilisateur connecté :');
  //       console.log(response);
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  // getUserById(user: User): void {
  //   this.userService.getUser(user.id).subscribe(
  //     (response: User) => {
  //       this.user = response;
  //       console.log('1');
  //       console.log(this.user);
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(
      (response: User[]) => {
        this.users = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // onAddUser(addForm: NgForm): void {
  //   // tslint:disable-next-line:no-non-null-assertion
  //   document.getElementById('add-employee-form')!.click();
  //   this.userService.addUser(addForm.value).subscribe(
  //     (response: User) => {
  //       this.getAllUsers();
  //       addForm.reset();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //       addForm.reset();
  //     }
  //   );
  // }

  // onUpdateUser(editUser: User): void {
    // this.getUser(editUser);
    // console.log('2');
    // this.user.name = editUser.name;
    // // console.log(this.user);
    // this.userService.updateUser(this.user).subscribe(
    //   (response: User) => {
    //     this.getUsers();
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // );
  // }

  // onDeleteUser(user: User | undefined): void {
  //   if (user) {
  //     this.userService.deleteUser(user.id).subscribe(
  //       (response: void) => {
  //         this.getAllUsers();
  //       },
  //       (error: HttpErrorResponse) => {
  //         alert(error.message);
  //       }
  //     );
  //   }
  // }

  // searchUsers(key: string): void {
  //   const results: User[] = [];
  //   for (const user of this.users) {
  //     if (user.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //       || user.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //       || user.telephone.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
  //       results.push(user);
  //     }
  //   }
  //   if (results.length === 0 || !key) {
  //     this.getUsers();
  //   }
  //   else {
  //     this.users = results;
  //   }
  // }

  // onOpenModal(user: User | null, mode: string): void {
  //   // tslint:disable-next-line:no-non-null-assertion
  //   const button = document.getElementById('invisibleButtonModal')!;
  //   if (mode === 'add') {
  //     button.setAttribute('data-target', '#addEmployeeModal');
  //   }
  //   else if (mode === 'edit' && user !== null) {
  //     this.editUser = user;
  //     button.setAttribute('data-target', '#updateEmployeeModal');
  //   }
  //   else if (mode === 'delete' && user !== null) {
  //     this.deleteUser = user;
  //     button.setAttribute('data-target', '#deleteEmployeeModal');
  //   }
  //   button.click();
  // }

}
