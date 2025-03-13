import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-shopprofile',
  templateUrl: './shopprofile.component.html',
  styleUrls: ['./shopprofile.component.scss']
})
export class ShopprofileComponent {
  public ShopArray:any=[]
  loginid:any
  constructor(private fb:FormBuilder,private router:Router,private dbservice:DbserviceService) { } 
  //api calling
  ngOnInit(): void 
   {
    this.loginid=localStorage.getItem('loginid')
    const id=this.loginid;
     this.dbservice.shopprofile({id}).then((data:any)=>{
 
       this.ShopArray=data});
   }

}
