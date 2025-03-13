import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-paymentview',
  templateUrl: './paymentview.component.html',
  styleUrls: ['./paymentview.component.scss']
})
export class PaymentviewComponent {
  public PaymentArray:any=[]
  loginid:any
  payviewform!:FormGroup;

  constructor(private fb:FormBuilder,private router:Router,private dbservice:DbserviceService) { } 
  //api calling

 
  ngOnInit(): void {

this.loginid=localStorage.getItem('loginid')
    const id=this.loginid;
    this.dbservice.paymentview({id}).then((data:any)=>{
     this.PaymentArray=data});
    }

}
