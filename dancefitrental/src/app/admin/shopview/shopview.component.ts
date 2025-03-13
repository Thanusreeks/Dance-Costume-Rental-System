import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-shopview',
  templateUrl: './shopview.component.html',
  styleUrls: ['./shopview.component.scss']
})
export class ShopviewComponent {
  public ShopArray:any=[]
  constructor(private fb:FormBuilder,private router:Router,private dbservice:DbserviceService) { } 
  //api calling
  ngOnInit(): void 
   {
     this.dbservice.shopview().then((data:any)=>{
 
       this.ShopArray=data});
   }
   confirmshop(shopid: any): void {
    const confirmshop = window.confirm('Are you sure you want to confirm?');
  
    if (confirmshop) {
      // User clicked "OK", perform the deletion
      this.ConfirmshopArray(shopid);
    } 
    else 
    {
      // User clicked "Cancel", do nothing or handle accordingly
    }
  }
  ConfirmshopArray(shopid: string)  
  { 
    this.dbservice.ConfirmshopArray({shopid}).then((confirmation: any) => { 
    if (confirmation.message === "Success") { 
    alert('Sucessfully Updated') 
    this.dbservice.confirmedshopview(); 
     
    }

})
  }


  Rejectdata(loginid: string)  
  { 
    this.dbservice.Rejectdata({ loginid }).then((confirmation: any) => { 
    if (confirmation.message === "Success") { 
    alert('Sucessfully Deleted') 
    this.dbservice.locationview(); 
     
}
})

   
  
  //End of new code for delete
//      DeleteShopArray(shopid: string)  
//      { 
//        this.dbservice.DeleteShopArray({ shopid }).then((confirmation: any) => { 
//        if (confirmation.message === "Success") { 
//        alert('Sucessfully Deleted') 
//        this.dbservice.confirmedshopview(); 
        
//        }
//       })
  
  
// }
// }
}
}