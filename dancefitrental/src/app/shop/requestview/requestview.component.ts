import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-requestview',
  templateUrl: './requestview.component.html',
  styleUrls: ['./requestview.component.scss']
})
export class RequestviewComponent {
  public RequestArray:any=[]
  loginid:any
  reqviewform!:FormGroup;

  constructor(private fb:FormBuilder,private router:Router,private dbservice:DbserviceService) { } 
  //api calling

 
  ngOnInit(): void {

this.loginid=localStorage.getItem('loginid')
    const id=this.loginid;
    this.dbservice.requestview({id}).then((data:any)=>{
     this.RequestArray=data});
    }
    confirmrequest(requestid: any): void {
      const confirmrequest = window.confirm('Are you sure you want to confirm?');
    
      if (confirmrequest) {
        // User clicked "OK", perform the deletion
        this.confirmrequestArray(requestid);
      } 
  }
  confirmrequestArray(requestid: string)  
  { 
    this.dbservice.confirmrequestArray({requestid}).then((confirmation: any) => { 
    if (confirmation.message === "Success") { 
    alert('Sucessfully Updated') 
    // this.dbservice.confirmedrequestview(); 
     
    }

})
  }
  Rejectrequest(requestid: string)  
  { 
    this.dbservice.Rejectrequest({ requestid }).then((confirmation: any) => { 
    if (confirmation.message === "Success") { 
    alert('Sucessfully Deleted') 
    // this.dbservice.requestview(); 
     
}
}) 
}
}



