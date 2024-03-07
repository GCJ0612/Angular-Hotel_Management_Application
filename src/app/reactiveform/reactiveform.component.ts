import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
  registrationForm=new FormGroup({
    username:new FormControl("Goutham"),
    email:new FormControl("email@gmail.com"),
    password:new FormControl("password@1234")
  })
  validateDetails(name:any,email:any,pwd:any){
    alert(name.value+"\n"+email.value+"\n"+pwd.value)
  }
}
