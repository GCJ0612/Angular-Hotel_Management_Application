import { Component } from '@angular/core';
import { UserService } from './payment/Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent {
  title = 'hotelapk';
  constructor(private userservie: UserService){}
}
