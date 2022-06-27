import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import{Ng2SearchPipeModule}from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CatalogModule } from './catalog/catalog.module';
import { DeliveryModule } from './delivery/delivery.module';
import { LoginComponent } from './login/login.component';
import { OrderprocessingModule } from './orderprocessing/orderprocessing.module';
import { PaymentprocessingModule } from './paymentprocessing/paymentprocessing.module';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CatalogModule,
    HttpClientModule,
    FormsModule,
    OrderprocessingModule,
    PaymentprocessingModule,
    DeliveryModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
