import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-locationview',
  templateUrl: './locationview.component.html',
  styleUrls: ['./locationview.component.scss']
})
export class LocationviewComponent {

  public LocationArray: any = []
  public DistrictArray: any = []
  locviewform!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbserviceService) { }

  ngOnInit(): void {
    this.locviewform = this.fb.group({
      districtid: [''],

    })
    this.dbservice.districtview().then((data: any) => {
      this.DistrictArray=data.sort((a, b) => a.districtname.localeCompare(b.districtname));
      // console.log(data); 
    });
    // this.db.locationview().then((data:any)=>{this. locationdata=data; 
    //   console.log(data) 
    // }) 
    this.loadLocationsByDistrict();

  }
  loadLocationsByDistrict() {
    const id = this.locviewform.value.districtid;
    this.dbservice.getdistrictbyid({ id }).then((data: any) => {
      this.LocationArray = data.sort((a, b) => a.locationname.localeCompare(b.locationname));
    });
  }

  onChange() {
    this.loadLocationsByDistrict();
  }
  //New code for delete

  confirmDelete(locationId: any): void {
    const confirmDelete = window.confirm('Are you sure you want to delete?');

    if (confirmDelete) {
      // User clicked "OK", perform the deletion
      this.DeleteLocationArray(locationId);
    }
    else {
      // User clicked "Cancel", do nothing or handle accordingly
    }
  }

  //End of new code for delete
  DeleteLocationArray(locationid: string) {
    this.dbservice.DeleteLocationArray({ locationid }).then((confirmation: any) => {
      if (confirmation.message === "Success") {
        alert('Sucessfully Deleted')
        this.dbservice.locationview();

      }
    })

  }

}