import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-confirmedshopview',
  templateUrl: './confirmedshopview.component.html',
  styleUrls: ['./confirmedshopview.component.scss']
})
export class ConfirmedshopviewComponent {
  public ShopArray:any=[]
  constructor(private fb:FormBuilder,private router:Router,private dbservice:DbserviceService) { } 
  //api calling
  ngOnInit(): void 
   {
     this.dbservice.confirmedshopview().then((data:any)=>{
 
       this.ShopArray=data});
   }

}
