import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-confirmedview',
  templateUrl: './confirmedview.component.html',
  styleUrls: ['./confirmedview.component.scss']
})
export class ConfirmedviewComponent {

  public confirmationArray:any[]=[];

  loginid:any;

  constructor(private fb:FormBuilder,private router:Router,private dbservice:DbserviceService) { } 

  ngOnInit(): void 
  {
  this.loginid=localStorage.getItem('loginid')
  const id=this.loginid;
  this.dbservice.confirmedrequestview({id}).then((data:any)=>{
    this.confirmationArray=data;
    console.log(data)
  });
  }
}
