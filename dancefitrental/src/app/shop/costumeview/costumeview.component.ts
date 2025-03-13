import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-costumeview',
  templateUrl: './costumeview.component.html',
  styleUrls: ['./costumeview.component.scss']
})
export class CostumeviewComponent {
  public CostumeArray:any=[]
  loginid:any
  constructor(private fb:FormBuilder,private router:Router,private dbservice:DbserviceService) { } 
  //api calling
  ngOnInit(): void 
   {
   
    this.loginid=localStorage.getItem('loginid')
    const id=this.loginid;
    this.dbservice.costumeview({id}).then((data:any)=>{
     this.CostumeArray=data});
   }
  //  New code for delete

confirmDelete(id:any): void {
  const confirmDelete = window.confirm('Are you sure you want to delete?');

  if (confirmDelete) {
    // User clicked "OK", perform the deletion
    this.DeleteCostumeArray(id);
  } 
  else 
  {
    // User clicked "Cancel", do nothing or handle accordingly
  }
}

// End of new code for delete
   DeleteCostumeArray(costumeid: string)  
   { 
     this.dbservice.DeleteCostumeArray({ costumeid }).then((confirmation: any) => { 
     if (confirmation.message === "Success") { 
     alert('Sucessfully Deleted') 
    //  this.dbservice.costumeview(); 
      
     }
    })
  }
}