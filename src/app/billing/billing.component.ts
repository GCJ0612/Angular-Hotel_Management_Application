import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent {
  selectedName: any;
  Item:any;
  quantity:any;
  
  constructor(private route: ActivatedRoute){}
 
  ngOnInit(){
    this.route.paramMap.subscribe(params =>{
      // console.log(params);
      this.selectedName=params.get('item');
      if(this.selectedName=="roti"){
       this.Item="Roti"; 
      }else if(this.selectedName=="dosa"){
        this.Item="Masale Dose"; 
       }else if(this.selectedName=="idly"){
        this.Item="Idly"; 
       }else if(this.selectedName=="fullmeals"){
        this.Item="South Indian Meal"; 
       }else if(this.selectedName=="puliyogare"){
        this.Item="Puliyogare"; 
       }else if(this.selectedName=="palav"){
        this.Item="Veg Palav"; 
       }else if(this.selectedName=="upma"){
        this.Item="Upma"; 
       }else if(this.selectedName=="poori"){
        this.Item="Poori"; 
       }
       
       else if(this.selectedName=="tea"){
        this.Item="Tea"; 
       }else if(this.selectedName=="coffee"){
        this.Item="Coffee"; 
       }else if(this.selectedName=="bcocktail"){
        this.Item="Blue Cocktail"; 
       }else if(this.selectedName=="scocktail"){
        this.Item="Summer Cocktail"; 
       }else if(this.selectedName=="rlassi"){
        this.Item="Rose Lassi"; 
       }else if(this.selectedName=="slassi"){
        this.Item="Strawberry Lassi"; 
       }else if(this.selectedName=="couplemilkshake"){
        this.Item="Couple Milk Shake"; 
       }else if(this.selectedName=="coffeemilkshake"){
        this.Item="Coffee Milk Shake"; 
       }else if(this.selectedName=="butterchicken"){
        this.Item="Butter Chicken Masala"; 
       }else if(this.selectedName=="thaali"){
        this.Item="North Indian Non-Veg Thaali"; 
       }else if(this.selectedName=="bonelessbiriyani"){
        this.Item="Chicken Bone Less Biriyani"; 
       }else if(this.selectedName=="donnebiriyani"){
        this.Item="Chicken Donne Biriyani"; 
       }else if(this.selectedName=="chickenlollipop"){
        this.Item="Chicken Lollipop"; 
       }else if(this.selectedName=="grillchicken"){
        this.Item="Grill Chicken"; 
       }else if(this.selectedName=="chickenkabab"){
        this.Item="Chicken Kabab"; 
       }else if(this.selectedName=="chicken65"){
        this.Item="Chicken 65"; 
       }
    });
  }
  validateDetails(item:any,qnty:any){
    
      if(item.value=="Roti"){ 
       alert("Food Name "+item.value+"\n"+"Food Price "+(qnty.value*70))
      }else if(item.value=="Masale Dose"){
        alert("Food Name "+item.value+"\n"+"Food Price "+qnty.value*50)
       }else if(item.value=="Idly"){
        alert("Food Name "+item.value+"\n"+"Food Price "+qnty.value*40) 
       }else if(item.value=="South Indian Meal"){
        alert("Food Name "+item.value+"\n"+"Food Price "+qnty.value*70)
       }else if(item.value=="Puliyogare"){
        alert("Food Name "+item.value+"\n"+"Food Price "+qnty.value*40)
       }else if(item.value=="Veg Palav"){
        alert("Food Name "+item.value+"\n"+"Food Price "+qnty.value*40)
       }else if(item.value=="Upma"){
        alert("Food Name "+item.value+"\n"+"Food Price "+qnty.value*40)
       }else if(item.value=="Poori"){
        alert("Food Name "+item.value+"\n"+"Food Price "+qnty.value*40)
       }
       
       
       else if(item.value=="Tea"){
        alert("Food Name "+item.value+"\n"+"Food Price "+qnty.value*20)
       }else if(item.value=="Coffee"){
        alert("Food Name "+item.value+"\n"+"Food Price "+qnty.value*20)
       }else if(item.value=="Blue Cocktail"){
        alert("Food Name "+item.value+"\n"+"Food Price "+qnty.value*70) 
       }else if(item.value=="Summer Cocktail"){
        alert("Food Name "+item.value+"\n"+"Food Price "+qnty.value*85) 
       }else if(item.value=="Rose Lassi"){
        alert("Food Name "+item.value+"\n"+"Food Price "+qnty.value*40) 
       }else if(item.value=="Strawberry Lassi"){
        alert("Food Name "+item.value+"\n"+"Food Price "+qnty.value*60) 
       }else if(item.value=="Couple Milk Shake"){
        alert("Food Name "+item.value+"\n"+"Food Price "+qnty.value*80) 
       }else if(item.value=="Coffee Milk Shake"){
        alert("Food Name "+item.value+"\n"+"Food Price "+qnty.value*50) 
       }
       
       else if(item.value=="Chicken Donne Biriyani"){
        alert("Food Name "+item.value+"\n"+"Food Price "+qnty.value*150) 
       }else if(item.value=="Chicken Bone Less Biriyani"){
        alert("Food Name "+item.value+"\n"+"Food Price "+qnty.value*190) 
       }else if(item.value=="North Indian Non-Veg Thaali"){
        alert("Food Name "+item.value+"\n"+"Food Price "+qnty.value*250) 
       }else if(item.value=="Butter Chicken Masala"){
        alert("Food Name "+item.value+"\n"+"Food Price "+qnty.value*120) 
       }else if(item.value=="Chicken Lollipop"){
        alert("Food Name "+item.value+"\n"+"Food Price "+qnty.value*120) 
       }else if(item.value=="Grill Chicken"){
        alert("Food Name "+item.value+"\n"+"Food Price "+qnty.value*160) 
       }else if(item.value=="Chicken Kabab"){
        alert("Food Name "+item.value+"\n"+"Food Price "+qnty.value*80) 
       }else if(item.value=="Chicken 65"){
        alert("Food Name "+item.value+"\n"+"Food Price "+qnty.value*80) 
       }
    
    // alert(item.value+"\n"+qnty.value)
   }
 
}
