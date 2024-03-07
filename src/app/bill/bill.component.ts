import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Userbill } from '../userbill';


@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {
 @Input() name: any;
 @Input() email:any;
 @Input() city:any;
 @Input() checkIn:any;
 @Input() checkOut:any;
 @Input() roomno:any;
 @Input() noofmem:any;
 @Input() days:any;
 @Input() category:any;
 @Input() rent:any;
 @Input() Totalprice: any;
 @Input() GST:any;
 @Input() interestamount:any;
 @Input() advance:any;
 @Input() refund:any;

  constructor(private route: ActivatedRoute) { }

}

