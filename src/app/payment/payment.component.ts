import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { CheckIn } from '../checkIn';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  selectedName: any;
  Item: any;
  quantity: any;
  Room: any;
  rent:any;
  Totalprice: any;
  GST = 12 / 100;
  interestamount:any;
  advance:any;
  refund:any;

  room1 = new CheckIn('',0,0,0,0,0,0);
  
  constructor(private route: ActivatedRoute, private router:Router,private userservice: UserService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedName = params.get('item');
      switch (this.selectedName) {
        case 'ETB': this.Room = "Economy Triple Bedded";
          this.rent = 900;
          this.interestamount=this.rent * this.GST;
          this.Totalprice = this.rent + this.interestamount;
          this.advance=this.Totalprice+1000;
          this.refund=this.advance-this.Totalprice;
          break;
        case 'EDB': this.Room = "Economy Double Bedded";
          this.rent = 700;
          this.interestamount=this.rent * this.GST;
          this.Totalprice = this.rent +this.interestamount;
          this.advance=this.Totalprice+1000;
          this.refund=this.advance-this.Totalprice;
          break;
        case 'DDB': this.Room = "Deluxe Double Bedded";
         this.rent = 1000;
          this.interestamount=this.rent * this.GST;
          this.Totalprice = this.rent +this.interestamount;
          this.advance=this.Totalprice+1000;
          this.refund=this.advance-this.Totalprice;
          break;
        case 'DTB': this.Room = "Deluxe Triple Bedded";
          this.rent = 1250;
          this.interestamount=this.rent * this.GST;
          this.Totalprice = this.rent + this.interestamount;
          this.advance=this.Totalprice+1000;
          this.refund=this.advance-this.Totalprice;
          break;
        case 'DFB': this.Room = "Deluxe Four Bedded";
          this.rent = 1500;
          this.interestamount=this.rent * this.GST;
          this.Totalprice = this.rent + this.interestamount;
          this.advance=this.Totalprice+1000;
          this.refund=this.advance-this.Totalprice;
          break;
        case 'DDBAC': this.Room = "Deluxe Double Bedded AC";
          this.rent= 1550;
          this.interestamount=this.rent* this.GST;
          this.Totalprice = this.rent + this.interestamount;
          this.advance=this.Totalprice+1000;
          this.refund=this.advance-this.Totalprice;
          break;
        case 'DTBAC': this.Room = "Deluxe Triple Bedded AC";
          this.rent= 1800;
          this.interestamount=this.rent * this.GST;
          this.Totalprice = this.rent + this.interestamount;
          this.advance=this.Totalprice+1000;
          this.refund=this.advance-this.Totalprice;
          break;
        case 'DFBAC': this.Room = "Deluxe Four Bedded AC";
          this.rent= 2500;
          this.interestamount=this.rent * this.GST;
          this.Totalprice = this.rent + this.interestamount;
          this.advance=this.Totalprice+1000;
          this.refund=this.advance-this.Totalprice;
          break;
      }
      this.room1 = new CheckIn(this.Room,this.rent, this.Totalprice,this.GST,this.advance,this.refund,this.interestamount);
    });
    
  }

  public username:any;
  public useremail:any;
  public city:any;
  public checkIn:any;
  public checkOut:any;
  public noofmem:any;
  public roomno:any;
  public days:any;
  public category:any;
  public roomrent:any;
  public phone:any;

  submit(name:any,email:any,city:any,checkIn:any,checkOut:any,noofmem:any,roomno:any,days:any,category:any,phone:any){
    this.username=name;
    this.useremail=email;
    this.city=city.value;
    this.checkIn=checkIn.value;
    this.checkOut=checkOut.value;
    this.category=category.value;
    this.noofmem=noofmem.value;
    this.roomno=roomno.value;
    this.days=days.value;
    this.phone=phone.value;
  }

  

}
