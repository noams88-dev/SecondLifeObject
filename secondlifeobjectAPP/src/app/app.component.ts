import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // getUserWithRequest(): void {
  //   console.log('début');
  //   this.authService.getConnectedUser(this.tokenStorage.getToken()).subscribe(
  //     (connectedUser: User) => {
  //       const roles: string[] = [];
  //       connectedUser.roles.forEach(element => roles.push(element.name));
  //       this.tokenStorage.saveAuthorities(roles);
  //       console.log(roles);
  //     }
  //   );
  // }
}
