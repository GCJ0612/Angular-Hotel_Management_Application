import { Component } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
// image:string='';
validateData(name:any,email:any,pwd:any,city:any,contact:any){
  alert(`Hello ${name.value} \nThanks for Joining Us`);
}

}
