import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminmasterComponent } from './admin/adminmaster/adminmaster.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { GuestmasterComponent } from './guest/guestmaster/guestmaster.component';
import { GuesthomeComponent } from './guest/guesthome/guesthome.component';
import { GuestloginComponent } from './guest/guestlogin/guestlogin.component';
import { DistrictregComponent } from './admin/districtreg/districtreg.component';
import { LocationregComponent } from './admin/locationreg/locationreg.component';
import { CategoryregComponent } from './admin/categoryreg/categoryreg.component';
import { DistrictviewComponent } from './admin/districtview/districtview.component';
import { CategoryviewComponent } from './admin/categoryview/categoryview.component';
import { LocationviewComponent } from './admin/locationview/locationview.component';
import { ShopregComponent } from './guest/shopreg/shopreg.component';
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

const routes: Routes = [{path : 'adminmaster',component:AdminmasterComponent,
children:
[
  {path: 'adminhome',component:AdminhomeComponent},
  {path: 'districtreg',component:DistrictregComponent},
  {path: 'locationreg',component:LocationregComponent},
  {path: 'categoryreg',component:CategoryregComponent},
  {path: 'districtview',component:DistrictviewComponent},
  {path: 'categoryview',component:CategoryviewComponent},
  {path: 'locationview',component:LocationviewComponent},
  {path: 'categoryedit/:id',component:CategoryeditComponent},
  {path: 'locationedit/:id',component:LocationeditComponent},
  {path: 'shopview',component:ShopviewComponent},
  {path: 'confirmedshopview',component:ConfirmedshopviewComponent},
  {path: 'customerview',component:CustomerviewComponent},
  {path: 'shopreport',component:ShopreportComponent},
  {path: 'customerreport',component:CustomerreportComponent},
  {path: 'categorypie',component:CategorypieComponent},
  {path: 'datewisereport',component:DatewisereportComponent},
  {path: 'costumepie',component:CostumepieComponent},


]
},
{path:'',redirectTo:'guestmaster/guesthome',pathMatch:'full'},
  {path : 'guestmaster',component:GuestmasterComponent,
  children:
  [
    {path: 'guesthome',component:GuesthomeComponent},
    {path:'guestlogin',component:GuestloginComponent},
    {path:'shopreg',component:ShopregComponent},
    {path:'customerreg',component:CustomerregComponent},
    {path:'forgot',component:ForgotComponent},

  ] 
},
{
  path : 'shopmaster',component:ShopmasterComponent,
  children:
  [
    {path: 'shophome',component:ShophomeComponent},
    {path: 'costumereg',component:CostumeregComponent},
    {path: 'costumeview',component:CostumeviewComponent},
    {path: 'costumeedit/:id',component:CostumeeditComponent},
    {path: 'shopprofile',component:ShopprofileComponent},
    {path: 'shopedit/:id',component:ShopeditComponent},
    {path: 'requestview',component:RequestviewComponent},
    {path: 'changestock/:id',component:ChangestockComponent},
    {path: 'shoppassword',component:ShoppasswordComponent},
    {path: 'paymentview',component:PaymentviewComponent},





  ]

},
{
  path : 'customermaster',component:CustomermasterComponent,
  children:
  [
    {path: 'customerhome',component:CustomerhomeComponent},
    {path: 'viewcategory',component:ViewcategoryComponent},
    {path: 'viewcostume/:id',component:ViewcostumeComponent},
    {path: 'customerprofile',component:CustomerprofileComponent},
    {path: 'customeredit/:id',component:CustomereditComponent},
    {path: 'viewmorecostume/:id',component:ViewmorecostumeComponent},
    {path: 'request/:id',component:RequestComponent},
    {path: 'confirmedview',component:ConfirmedviewComponent},
    {path: 'payment/:id',component:PaymentComponent},
    {path: 'customerpassword',component:CustomerpasswordComponent},



  ]

}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
