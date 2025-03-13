import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';
import * as XLSX from 'xlsx'; // Import XLSX library

@Component({
  selector: 'app-customerreport',
  templateUrl: './customerreport.component.html',
  styleUrls: ['./customerreport.component.scss']
})
export class CustomerreportComponent {
  @ViewChild('TABLE', { static: false }) TABLE!: ElementRef;
  title = 'Excel';
  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'customerreport.xlsx');
  }
 
  
  public CustomerArray:any=[]
  constructor(private fb:FormBuilder,private router:Router,private dbservice:DbserviceService) { } 

  successmsg: any;
  ngOnInit(): void {
    this.customerreport();
  }
  customerreport(){
    this.dbservice.customerreport().then((data: any) => {
      this.CustomerArray = data;
    });
  }
}