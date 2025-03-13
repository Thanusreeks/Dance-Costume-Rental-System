import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-locationreg',
  templateUrl: './locationreg.component.html',
  styleUrls: ['./locationreg.component.scss']
})
export class LocationregComponent {
  public DistrictArray: any[] = [];


  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbserviceService) { }

  //pageload event
  ngOnInit(): void 
  {
    this.dbservice.districtview().then((data:any)=>{

      this.DistrictArray=data});
  }

  //Form Initilization

  locationregform = this.fb.group({
    locationname: [''],
    Districtid:['']

  })
  //End of form
  


  //End of pageload
  Onsubmit() {
    console.log(this.locationregform.value)
    this.dbservice.locationreg(this.locationregform.value).then((confirmation: any) => {
      if (confirmation.message == "Success") {
        alert('Registered Successfully')
        this.router.navigate(['adminmaster/locationview'])
      }
      else {
        alert('Data already exist')
      }
    })

  }
}
