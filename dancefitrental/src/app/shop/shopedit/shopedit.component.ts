import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-shopeedit',
  templateUrl: './shopedit.component.html',
  styleUrls: ['./shopedit.component.scss']
})
export class ShopeditComponent {
  shopid: any; // Correct the property name to 'ategoryId' 
  public ShopArray: any;
  public DistrictArray:any[]=[];
  public LocationArray:any[]=[];
  EditShopprofileFormGroup!: FormGroup;
  db: any;
  
  
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private dbservice: DbserviceService) {
    route.paramMap.subscribe((params: ParamMap) => {
      this.shopid = params.get('id')
    })

  }

  
  //page load 
  ngOnInit(): void {
    console.log(this.shopid)
    this.EditShopprofileFormGroup = this.fb.group({
      shopid: [''], // Use 'Costumeid' here 
      shopname: [''],
      districtid:[''],
      locationid: [''],
      shopcontact: [''],
      shopemail:[''],
      licenseno: ['']
    })
    this.dbservice.districtview().then((data:any)=>{
      this.DistrictArray=data;
      console.log(data);
      });
     this.dbservice.locationview().then((data:any)=>{
     this.LocationArray=data;
     console.log(data)
}) ;
    const id = this.shopid;
    console.log(id);
    this.dbservice.getshopdetails({ id }).then((data: any) => { // Use  'Costumeid' here
      this.ShopArray = data;
      console.log(this.ShopArray);
      this.EditShopprofileFormGroup.setValue({
        shopid: this.ShopArray[0].shopid, // Use 'shopid' here 
        shopname: this.ShopArray[0].shopname,
        districtid: this.ShopArray[0].districtid,
        locationid: this.ShopArray[0].locationid,
        shopcontact: this.ShopArray[0].shopcontact,
        shopemail: this.ShopArray[0].shopemail,
        licenseno: this.ShopArray[0].licenseno
       
      });
      console.log(this.EditShopprofileFormGroup.value)
    });
  }
  //End of page load 

  //Submit code 
//   onChangeDistrict() {
//     const districtId = this.EditShopprofileFormGroup.get('districtid').value;
//     this.dbservice.getdistrictbyid({ districtId }).then((data: any) => {
//         this.LocationArray = data;
//     });
// }
onChange() {
  const id = this.EditShopprofileFormGroup.value.districtid;
  console.log(id)
  this.dbservice.getdistrictbyid({ id }).then((data: any) => {
    this.LocationArray = data;
    console.log(this.LocationArray)
  });
}
  onSubmit() {
   
      
    this.dbservice.updateshop(this.EditShopprofileFormGroup.value).then((confirmation: any) => 
    {
        if (confirmation.message === "Success") {

          alert('Shop Details Updated')
          this.router.navigate(['/shopmaster/shopprofile'])
        }
      })
  }
}