import { Component, ElementRef, ViewChild } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';
import * as XLSX from 'xlsx'; // Import XLSX library

@Component({
  selector: 'app-shopreport',
  templateUrl: './shopreport.component.html',
  styleUrls: ['./shopreport.component.scss']
})
export class ShopreportComponent {
  @ViewChild('TABLE', { static: false }) TABLE!: ElementRef;
  title = 'Excel';
  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'shopreport.xlsx');
  }
  public ShopArray:any=[]
  constructor(private dbservice: DbserviceService) { }
  successmsg: any;
  ngOnInit(): void {
    this.shopreport();
  }
  shopreport() {
    this.dbservice.shopreport().then((data: any) => {
      this.ShopArray = data;
    });
  }
}