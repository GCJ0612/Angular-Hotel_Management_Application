import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { VegComponent } from './veg/veg.component';
import { NonvegComponent } from './nonveg/nonveg.component';
import { BillingComponent } from './billing/billing.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplatereferenceformComponent } from './templatereferenceform/templatereferenceform.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { DdbComponent } from './ddb/ddb.component';
import { DdbacComponent } from './ddbac/ddbac.component';
import { DfbComponent } from './dfb/dfb.component';
import { DfbacComponent } from './dfbac/dfbac.component';
import { DtbComponent } from './dtb/dtb.component';
import { DtbacComponent } from './dtbac/dtbac.component';
import { EdbComponent } from './edb/edb.component';
import { EtbComponent } from './etb/etb.component';
import { PaymentComponent } from './payment/payment.component';
import { BillComponent } from './bill/bill.component';

// const routes: Routes = [{path:" ",redirectTo:'home',pathMatch:'full'},{path:'home',component:HomeComponent},
// {path:'order',component:OrderComponent,children:[{path:" ",redirectTo:'order',pathMatch:'full'},{path:'beverages',component:BeveragesComponent,children:[{path:':item',component:BillingComponent}]},
// {path:'veg',component:VegComponent,children:[{path:':item',component:BillingComponent}]},{path:'nonveg',component:NonvegComponent,children:[{path:':item',component:BillingComponent}]}]},{path:'billing',component:BillingComponent},{path:'**',component:PagenotfoundComponent}];
// {path:'payment',component:PaymentComponent},
const routes: Routes = [{path:"",redirectTo:'home',pathMatch:'full'},{path:'home',component:HomeComponent,children:[{path:'accomodation',component:AccomodationComponent,children:[{path:'ddb',component:DdbComponent,children:[{path:'payment/:item',component:PaymentComponent,children:[{path:'bill',component:BillComponent}]}]},
{path:'ddbac',component:DdbacComponent,children:[{path:'payment/:item',component:PaymentComponent,children:[{path:'bill',component:BillComponent}]}]},{path:'dfb',component:DfbComponent,children:[{path:'payment/:item',component:PaymentComponent}]},{path:'dfbac',component:DfbacComponent,children:[{path:'payment/:item',component:PaymentComponent}]},{path:'dtb',component:DtbComponent,children:[{path:'payment/:item',component:PaymentComponent}]},{path:'dtbac',component:DtbacComponent,children:[{path:'payment/:item',component:PaymentComponent}]},
{path:'edb',component:EdbComponent,children:[{path:'payment/:item',component:PaymentComponent}]},{path:'etb',component:EtbComponent,children:[{path:'payment/:item',component:PaymentComponent}]}]}]},

{path:'accomodation',component:AccomodationComponent,children:[{path:'ddb',component:DdbComponent,children:[{path:'payment/:item',component:PaymentComponent,children:[{path:'bill',component:BillComponent}]}]},
{path:'ddbac',component:DdbacComponent,children:[{path:'payment/:item',component:PaymentComponent,children:[{path:'bill',component:BillComponent}]}]},
{path:'dfb',component:DfbComponent,children:[{path:'payment/:item',component:PaymentComponent,children:[{path:'bill',component:BillComponent}]}]},
{path:'dfbac',component:DfbacComponent,children:[{path:'payment/:item',component:PaymentComponent,children:[{path:'bill',component:BillComponent}]}]},
{path:'dtb',component:DtbComponent,children:[{path:'payment/:item',component:PaymentComponent,children:[{path:'bill',component:BillComponent}]}]},
{path:'dtbac',component:DtbacComponent,children:[{path:'payment/:item',component:PaymentComponent,children:[{path:'bill',component:BillComponent}]}]},
{path:'edb',component:EdbComponent,children:[{path:'payment/:item',component:PaymentComponent,children:[{path:'bill',component:BillComponent}]}]},
{path:'etb',component:EtbComponent,children:[{path:'payment/:item',component:PaymentComponent,children:[{path:'bill',component:BillComponent}]}]}]},
{path:'payment/:item',component:PaymentComponent,children:[{path:'bill',component:BillComponent}]},{path:'bill',component:BillComponent},
{path:'order',component:OrderComponent,children:[{path:" ",redirectTo:'order',pathMatch:'full'},{path:'beverages',component:BeveragesComponent,children:[{path:'order/beverages/:item',component:BillingComponent}]},
{path:'veg',component:VegComponent,children:[{path:'order/veg/:item',component:BillingComponent}]},
{path:'nonveg',component:NonvegComponent,children:[{path:':item',component:BillingComponent}]}]},
{path:'billing',component:BillingComponent},{path:'contact',component:ContactComponent},{path:'contact',component:ContactComponent,children:[{path:'reactiveform',component:ReactiveformComponent},{path:'templatereferenceform',component:TemplatereferenceformComponent},]},
{path:'**',component:PagenotfoundComponent}];
                                                                                                    
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
