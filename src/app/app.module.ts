import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { VegComponent } from './veg/veg.component';
import { NonvegComponent } from './nonveg/nonveg.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BillingComponent } from './billing/billing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplatereferenceformComponent } from './templatereferenceform/templatereferenceform.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { DdbComponent } from './ddb/ddb.component';
import { DtbComponent } from './dtb/dtb.component';
import { DfbComponent } from './dfb/dfb.component';
import { DdbacComponent } from './ddbac/ddbac.component';
import { DtbacComponent } from './dtbac/dtbac.component';
import { DfbacComponent } from './dfbac/dfbac.component';
import { EdbComponent } from './edb/edb.component';
import { EtbComponent } from './etb/etb.component';
import { PaymentComponent } from './payment/payment.component';
import { BillComponent } from './bill/bill.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    BeveragesComponent,
    VegComponent,
    NonvegComponent,
    PagenotfoundComponent,
    BillingComponent,
    ContactComponent,
    ReactiveformComponent,
    TemplatereferenceformComponent,
    AccomodationComponent,
    DdbComponent,
    DtbComponent,
    DfbComponent,
    DdbacComponent,
    DtbacComponent,
    DfbacComponent,
    EdbComponent,
    EtbComponent,
    PaymentComponent,
    BillComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
