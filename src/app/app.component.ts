import { Component } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '18-Guard';

  constructor(private userService: UserService) {
    // userService.setRole('ADMIN');
    // userService.setRole('ANONYMOUS');
    // userService.setRole('USER');
  }
}
