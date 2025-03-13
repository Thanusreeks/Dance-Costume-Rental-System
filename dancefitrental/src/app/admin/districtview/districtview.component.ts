import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-districtview',
  templateUrl: './districtview.component.html',
  styleUrls: ['./districtview.component.scss']
})
export class DistrictviewComponent {
  public DistrictArray:any=[]
  constructor(private fb:FormBuilder,private router:Router,private dbservice:DbserviceService) { } 
  //api calling
  ngOnInit(): void 
   {
     this.dbservice.districtview().then((data:any)=>{
 
       this.DistrictArray=data});
   }

}