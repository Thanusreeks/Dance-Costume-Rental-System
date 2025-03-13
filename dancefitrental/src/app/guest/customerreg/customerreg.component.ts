import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-customerreg',
  templateUrl: './customerreg.component.html',
  styleUrls: ['./customerreg.component.scss']
})
export class CustomerregComponent {
  public DistrictArray:any[]=[];
  public LocationArray:any[]=[];
  public ShopregArray:any[]=[];
  validationstatus = null;
    dbservice: any;
    customerregform!:FormGroup;
    selectFiles: any;
    selectedFiles: any;
    currentFile!: File;
    message: any;
  constructor(private fb:FormBuilder,private db:DbserviceService,private router:Router) { }
  
  ngOnInit(): void {
  this.customerregform=this.fb.group({
  customername: ['',[Validators.required,Validators.pattern(/^[A-Z][a-zA-z\s\w]*$/)]],
  customercontact: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
  customeremail: ['',[Validators.required,Validators.email]],
  districtid:['',[Validators.required]],
  locationid: ['',[Validators.required]],
  username: ['', [Validators.required]],
  password: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  })
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
    const id = this.customerregform.value.districtid;
    this.db.getdistrictbyid({ id }).then((data: any) => {
      this.LocationArray = data.sort((a, b) => a.locationname.localeCompare(b.locationname));
    });
  }

  onChange() {
    this.loadLocationsByDistrict();
  }

    
    Onsubmit() {
      if(this.customerregform.invalid){
        this.validationstatus ="";
        alert('Please Enter data')
    
        return
      } 
    else{
      this.validationstatus =null;
      
      console.log(this.customerregform.value)
     
      this.db.customerreg(this.customerregform.value).then((confirmation: any) => {
        if (confirmation.message == "Success") {
          alert('Registered Successfully')
          this.router.navigate(['guestmaster/guestlogin'])
        }
        else {
          alert('Username Already Exist')
  
  
        }
      })
    }
}
}











