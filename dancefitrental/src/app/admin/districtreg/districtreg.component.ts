import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-districtreg',
  templateUrl: './districtreg.component.html',
  styleUrls: ['./districtreg.component.scss']
})
export class DistrictregComponent 
{
  validationstatus = null;

  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbserviceService) { }
  ngOnInit(): void {
  }
  districtregform = this.fb.group({
    districtname: ['',[Validators.required,Validators.pattern(/^[A-Z][a-zA-z\s\w]*$/)]],
  })
  Onsubmit() {
    console.log(this.districtregform.value)
    this.dbservice.districtreg(this.districtregform.value).then((confirmation: any) => {
      if (confirmation.message == "Success") 
      {
        alert('Registered Successfully')
        this.router.navigate(['adminmaster/locationview'])
      }
      else 
      {
        alert('Data already exist')
      }
    })

  }
}
