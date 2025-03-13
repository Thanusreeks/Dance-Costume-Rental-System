import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdminmasterComponent } from './admin/adminmaster/adminmaster.component';
import { GuesthomeComponent } from './guest/guesthome/guesthome.component';
import { GuestmasterComponent } from './guest/guestmaster/guestmaster.component';
import { GuestloginComponent } from './guest/guestlogin/guestlogin.component';
import { ShopregComponent } from './guest/shopreg/shopreg.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DistrictregComponent } from './admin/districtreg/districtreg.component';
import { CategoryregComponent } from './admin/categoryreg/categoryreg.component';
import { LocationregComponent } from './admin/locationreg/locationreg.component';
import { DistrictviewComponent } from './admin/districtview/districtview.component';
import { CategoryviewComponent } from './admin/categoryview/categoryview.component';
import { LocationviewComponent } from './admin/locationview/locationview.component';
import { ShopmasterComponent } from './shop/shopmaster/shopmaster.component';
import { ShophomeComponent } from './shop/shophome/shophome.component';
import { CategoryeditComponent } from './admin/categoryedit/categoryedit.component';
import { LocationeditComponent } from './admin/locationedit/locationedit.component';
import { CustomerregComponent } from './guest/customerreg/customerreg.component';
import { CustomermasterComponent } from './customer/customermaster/customermaster.component';
import { CustomerhomeComponent } from './customer/customerhome/customerhome.component';
import { CostumeregComponent } from './shop/costumereg/costumereg.component';
import { CostumeviewComponent } from './shop/costumeview/costumeview.component';
import { CostumeeditComponent } from './shop/costumeedit/costumeedit.component';
import { ShopviewComponent } from './admin/shopview/shopview.component';
import { ConfirmedshopviewComponent } from './admin/confirmedshopview/confirmedshopview.component';
import { CustomerviewComponent } from './admin/customerview/customerview.component';
import { ShopprofileComponent } from './shop/shopprofile/shopprofile.component';
import { ShopeditComponent } from './shop/shopedit/shopedit.component';
import { ViewcategoryComponent } from './customer/viewcategory/viewcategory.component';
import { ViewcostumeComponent } from './customer/viewcostume/viewcostume.component';
import { CustomerprofileComponent } from './customer/customerprofile/customerprofile.component';
import { CustomereditComponent } from './customer/customeredit/customeredit.component';
import { ViewmorecostumeComponent } from './customer/viewmorecostume/viewmorecostume.component';
import { RequestComponent } from './customer/request/request.component';
import { RequestviewComponent } from './shop/requestview/requestview.component';
import { ChangestockComponent } from './shop/changestock/changestock.component';
import { ConfirmedviewComponent } from './customer/confirmedview/confirmedview.component';
import { PaymentComponent } from './customer/payment/payment.component';
import { ShopreportComponent } from './admin/shopreport/shopreport.component';
import { CustomerreportComponent } from './admin/customerreport/customerreport.component';
import { CategorypieComponent } from './admin/categorypie/categorypie.component';
import { DatewisereportComponent } from './admin/datewisereport/datewisereport.component';
import { CostumepieComponent } from './admin/costumepie/costumepie.component';
import { ForgotComponent } from './guest/forgot/forgot.component';
import { ShoppasswordComponent } from './shop/shoppassword/shoppassword.component';
import { CustomerpasswordComponent } from './customer/customerpassword/customerpassword.component';
import { PaymentviewComponent } from './shop/paymentview/paymentview.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminhomeComponent,
    AdminmasterComponent,
    GuesthomeComponent,
    GuestmasterComponent,
    GuestloginComponent,
    DistrictregComponent,
    CategoryregComponent,
    LocationregComponent,
    DistrictviewComponent,
    CategoryviewComponent,
    LocationviewComponent,
    ShopregComponent,
    ShopmasterComponent,
    ShophomeComponent,
    CategoryeditComponent,
    LocationeditComponent,
    CustomerregComponent,
    CustomermasterComponent,
    CustomerhomeComponent,
    CostumeregComponent,
    CostumeviewComponent,
    CostumeeditComponent,
    ShopviewComponent,
    ConfirmedshopviewComponent,
    CustomerviewComponent,
    ShopprofileComponent,
    ShopeditComponent,
    ViewcategoryComponent,
    ViewcostumeComponent,
    CustomerprofileComponent,
    CustomereditComponent,
    ViewmorecostumeComponent,
    RequestComponent,
    RequestviewComponent,
    ChangestockComponent,
    ConfirmedviewComponent,
    PaymentComponent,
    ShopreportComponent,
    CustomerreportComponent,
    CategorypieComponent,
    DatewisereportComponent,
    CostumepieComponent,
    ForgotComponent,
    ShoppasswordComponent,
    CustomerpasswordComponent,
    PaymentviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
