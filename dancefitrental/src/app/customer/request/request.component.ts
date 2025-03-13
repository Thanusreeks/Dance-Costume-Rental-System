import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent {
  costumeid: any
  loginid: any
  shopid: any
  public CostumeArray: any[] = [];
  requestform!: FormGroup;
  selectedFiles?: FileList;
  currentFile?: any;
  message = '';
  totalamount: any;
  noofdays: any;
  quantity: any;
  minDate: string; // Define minDate property

  constructor(private fb: FormBuilder, private db: DbserviceService, private router: Router, private route: ActivatedRoute) {
    route.paramMap.subscribe((Params: ParamMap) => { this.costumeid = Params.get('id') })
    localStorage.setItem("costumeid", this.costumeid)
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }

  ngOnInit(): void {
    console.log(this.costumeid)
    this.requestform = this.fb.group({
      shopid: [''],
      costumeid: localStorage.getItem("costumeid"),
      costumename: [''],
      price: [''],
      fromdate: [''],
      todate: [''],
      noofdays: [''],
      size: [''],
      count: localStorage.getItem('quantity'),
      totalamount: [''],
      loginid: localStorage.getItem('loginid'),
      costumeimg: [''],

    })
    const id = this.costumeid;
    this.db.viewmorecostume({ id }).then((data: any) => {
      this.CostumeArray = data;
      console.log(this.CostumeArray);

      this.requestform.setValue({
        shopid: this.CostumeArray[0].shopid,
        costumeid: this.CostumeArray[0].costumeid,
        costumename: this.CostumeArray[0].costumename,
        price: this.CostumeArray[0].price,
        fromdate: "",
        todate: "",
      
        noofdays: 0,
        size: "",
        count: 1,
        totalamount: 0,
        loginid: localStorage.getItem('loginid'),
        costumeimg: this.CostumeArray[0].costumeimg,

      });
      console.log(this.requestform.value)
    });

  }
  

  onChangedate() {
    const fromdate = this.requestform.value.fromdate;
    const todate = this.requestform.value.todate;
    const date1 = new Date(fromdate);
    const date2 = new Date(todate);

    if (!isNaN(date1.getTime()) && !isNaN(date2.getTime())) {
        const timeDifference = date2.getTime() - date1.getTime();
        const noofdays = Math.ceil(timeDifference / (1000 * 3600 * 24));
        this.requestform.get("noofdays")?.setValue(noofdays);

        this.calculateTotalAmount();
    } else {
        console.error('Invalid dates');
    }
  }

  onChange() {
    this.calculateTotalAmount();
  }

  calculateTotalAmount() {
    const count = parseInt(this.requestform.value.count);
    const price = this.CostumeArray[0].price;
    const noofdays = this.requestform.value.noofdays;
    const totalAmount = price * noofdays * count;
    this.requestform.get("totalamount")?.setValue(totalAmount);
  }

  Onsubmit() {
    console.log(this.requestform.value)
    this.db.request(this.requestform.value).then((confirmation: any) => {
      if (confirmation.message === "Success") {
        alert('request is successfully send')
        this.router.navigate(['/cmaster/viewcategory'])
      }
    })
  }

  displaySizeChart() {
    const pdfUrl = 'assets/customer/images/size.pdf'; // Update the URL accordingly
    window.open(pdfUrl, '_blank');
  }

  incrementQuantity() {
    let count = parseInt(this.requestform.get('count').value);
    count++;
    this.requestform.get('count').setValue(count);
    this.calculateTotalAmount(); // Recalculate total amount after incrementing quantity
  }

  decrementQuantity() {
    let count = parseInt(this.requestform.get('count').value);
    if (count > 1) {
        count--;
        this.requestform.get('count').setValue(count);
        this.calculateTotalAmount(); // Recalculate total amount after decrementing quantity
    }
  }
}