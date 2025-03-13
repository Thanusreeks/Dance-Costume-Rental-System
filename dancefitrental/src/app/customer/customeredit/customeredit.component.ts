import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-customeredit',
  templateUrl: './customeredit.component.html',
  styleUrls: ['./customeredit.component.scss']
})
export class CustomereditComponent {


  customerid: any; // Correct the property name to 'ategoryId' 
  public CustomerArray: any;
  public DistrictArray: any[] = [];
  public LocationArray:any[]=[];
  EditCostumeFormGroup!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private dbservice: DbserviceService) {
    route.paramMap.subscribe((params: ParamMap) => {
      this.customerid = params.get('id')
    })

    // this.route.paramMap.subscribe((params: ParamMap) => { 
    //   this.CourseId = params.get('id'); // Use 'CourseId' here 
    // }); 
  }

 //page load 
 ngOnInit(): void {
  console.log(this.customerid)
  this.EditCostumeFormGroup = this.fb.group({
    customerid: [''], 
    customername: [''],
    locationid: [''],
    districtid: [''],
    customercontact: [''],
    customeremail: [''],


  })
  
  this.dbservice.locationview().then((data: any) => {
    this.LocationArray = data;
    console.log(data);
  });
  this.dbservice.districtview().then((data: any) => {
    this.DistrictArray = data;
    // console.log(data);
  });

  const id = this.customerid;
  console.log(id);
  this.dbservice.getcustomerdetails({ id }).then((data: any) => { // Use  'Costumeid' here
    this.CustomerArray = data;
    console.log(this.CustomerArray); 
    
    this.EditCostumeFormGroup.setValue({
      customerid: this.CustomerArray[0].customerid,  
      customername: this.CustomerArray[0].customername,
      // locationid: data[0].locationid,
      locationid:this.CustomerArray[0].locationid,
      districtid: this.CustomerArray[0].districtid,
      // districtid:this.DistrictArray[0].districtid,
      customercontact: this.CustomerArray[0].customercontact,
      customeremail: this.CustomerArray[0].customeremail,

    });
    console.log(this.EditCostumeFormGroup.value)
  });
}
onChange() {
  const id = this.EditCostumeFormGroup.value.districtid;
  console.log(id)
  this.dbservice.getdistrictbyid({ id }).then((data: any) => {
    this.LocationArray = data;
    console.log(this.LocationArray)
  });
}
  

//End of page load 

//Submit code 

onSubmit() {


  this.dbservice.updatecustomer(this.EditCostumeFormGroup.value).then((confirmation: any) => {
    if (confirmation.message === "Success") {

      alert('Customer Details Updated')
      this.router.navigate(['/customermaster/customerprofile'])
    }
  })
}
}
