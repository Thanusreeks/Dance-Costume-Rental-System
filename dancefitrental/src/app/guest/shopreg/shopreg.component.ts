import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-shopreg',
  templateUrl: './shopreg.component.html',
  styleUrls: ['./shopreg.component.scss']
})
export class ShopregComponent {
  public DistrictArray:any[]=[];
public LocationArray:any[]=[];
public ShopregArray:any[]=[];
validationstatus = null;

  dbservice: any;
  shopregform!:FormGroup;
  selectFiles: any;
  selectedFiles: any;
  currentFile!: File;
  message: any;
  // shopid:any
constructor(private fb:FormBuilder,private db:DbserviceService,private router:Router) { }

ngOnInit(): void {
this.shopregform=this.fb.group({
shopname: ['',[Validators.required,Validators.pattern(/^[A-Z][a-zA-z\s\w]*$/)]],
shopcontact: ['',[Validators.required, Validators.pattern('^[0-9]{10}$')]],
shopemail: ['',[Validators.required,Validators.email]],
districtid:['',[Validators.required]],
locationid: ['',[Validators.required]],
licenseno: ['',[Validators.required]],
username: ['',[Validators.required]],
password: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
})
// shopid:this.shopid=localStorage.setItem("shopid")


this.db.districtview().then((data:any)=>{
  this.DistrictArray=data.sort((a, b) => a.districtname.localeCompare(b.districtname));
// console.log(data);
});
// this.db.locationview().then((data:any)=>{this. locationdata=data;
// console.log(data)
// })
this.loadLocationsByDistrict();

  }
  
  loadLocationsByDistrict() {
    const id = this.shopregform.value.districtid;
    this.db.getdistrictbyid({ id }).then((data: any) => {
      this.LocationArray = data.sort((a, b) => a.locationname.localeCompare(b.locationname));
    });
  }

  onChange() {
    this.loadLocationsByDistrict();
  }
  

 


  Onsubmit() {
    if(this.shopregform.invalid){
      this.validationstatus ="";
      alert('Please Enter data')
  
      return
    } 
  else{
    this.validationstatus =null;
    console.log(this.shopregform.value);
    
   
    this.db.shopreg(this.shopregform.value).then((confirmation: any) => {
      if (confirmation.message == "Success") {
        alert('Registered Successfully')
        this.router.navigate(['guestmaster/guestlogin'])
      }
      else {

        alert('Username Already exist')


      }
    })
  }
}
}