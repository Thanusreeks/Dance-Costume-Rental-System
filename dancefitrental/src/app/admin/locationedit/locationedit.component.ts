import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-locationedit',
  templateUrl: './locationedit.component.html',
  styleUrls: ['./locationedit.component.scss']
})
export class LocationeditComponent {

  locationid: any; // Correct the property name to 'locationid' 
  public LocationArray: any;
  public DistrictArray:any;
  EditLocationFormGroup!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private dbservice: DbserviceService) {
    route.paramMap.subscribe((params: ParamMap) => {
      this.locationid = params.get('id')
    })

    // this.route.paramMap.subscribe((params: ParamMap) => { 
    //   this.CourseId = params.get('id'); // Use 'CourseId' here 
    // }); 
  }


  //page load 
  ngOnInit(): void {
    this.EditLocationFormGroup = this.fb.group({
      districtid:[''],
      locationid: [''], // Use 'locationid' here 
      locationname: [''],
      
    })


    this.dbservice.districtview().then((data:any)=>{ 
      this.DistrictArray=data; 
      // console.log(data); 
    }); 



    const id = this.locationid;
    console.log(id);
    this.dbservice.getlocationdetails({ id }).then((data: any) => { // Use  'Categoryid' here
      this.LocationArray = data;
      console.log(this.LocationArray);
      this.EditLocationFormGroup.setValue({
        districtid:data[0].districtid,
        locationid: data[0].locationid, // Use 'locationid' here 
        locationname: data[0].locationname,
        
      });
    });
  }
  //End of page load 

  //Submit code 

  onSubmit() {
    this.dbservice.updatelocation(this.EditLocationFormGroup.value).then((confirmation: any) => {
        if (confirmation.message === "Success") {

          alert('Location Details Updated')
          this.router.navigate(['/adminmaster/locationview'])
        }
      })
  }



}