import { Component } from '@angular/core';
import { Enquiry } from '../enquiry';

@Component({
  selector: 'app-templatereferenceform',
  templateUrl: './templatereferenceform.component.html',
  styleUrls: ['./templatereferenceform.component.css']
})
export class TemplatereferenceformComponent {
  enquiry1=new Enquiry("","",0,"","","");
  Genders=["Male","Female","Others"]  
  Items=["ttt","coffee","Juice","Lime Juice","Hot Drinks"]
  Modes=["Online Food Delivery","at hotel"]
  submitDetails(uname:any,email:any,num:any,gender:any,item:any,mode:any){
    if(uname==""){
      return false
    }else{
      alert(" Name : "+uname.value+"\n Email : "+email.value+
      "\n Gender : "+gender.value+"\n Item : "+item.value+"\n Mode of Delivery : "+mode.value)
      return true
    }
   
  }

}
