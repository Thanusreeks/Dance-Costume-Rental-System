import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-datewisereport',
  templateUrl: './datewisereport.component.html',
  styleUrls: ['./datewisereport.component.scss']
})
export class DatewisereportComponent {
  public RequestArray: any;

  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbserviceService) {}

  ngOnInit(): void {
  }

  datewiseform = this.fb.group({
    startdate: [''],
    enddate: ['']
  });

  OnSubmit() {
    this.dbservice.datewisereport(this.datewiseform.value).then((data: any) => {
      this.RequestArray = data;
      console.log(this.RequestArray); // Add this line to check the data received
    });
  }
  
}







