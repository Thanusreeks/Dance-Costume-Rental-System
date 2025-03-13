import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.scss']
})
export class CustomerprofileComponent {
  public CustomerArray:any=[]
  loginid:any
  constructor(private fb:FormBuilder,private router:Router,private dbservice:DbserviceService) { } 
  //api calling
  ngOnInit(): void 
   {
    this.loginid=localStorage.getItem('loginid')
    const id=this.loginid;
     this.dbservice.customerprofile({id}).then((data:any)=>{
 
       this.CustomerArray=data});
   }
   }
