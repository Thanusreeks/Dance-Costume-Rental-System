import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  loginid: any;
  requestid: any;
  public RequestArray: any[] = [];
  public PaymentArray: any[] = [];

  paymentform!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private dbservice: DbserviceService) {
    route.paramMap.subscribe((params: ParamMap) => {
      this.requestid = params.get('id');
    });
  }

  ngOnInit(): void {
    const loginid = localStorage.getItem("loginid");

    this.paymentform = this.fb.group({
      requestid: [this.requestid],
      loginid: [loginid],
      advance: [null, Validators.required], // Set initial value to null
    });

    this.dbservice.requestdetailsbyid({ loginid, id: this.requestid }).then((data: any) => {
      this.RequestArray = data;
      if (this.RequestArray.length > 0) {
        const totalamount = this.RequestArray[0]?.totalamount;
        const advance = totalamount * 0.5; // Calculate 50% of total amount
        this.paymentform.patchValue({
          totalamount: totalamount,
          advance: advance, // Set the calculated advance value
        });
      }
    });
  }


  Onsubmit() {
    console.log(this.paymentform.value);
    this.dbservice.payment(this.paymentform.value).then((confirmation: any) => {
      if (confirmation.message == "Success") {
        alert('Payment Successfully Finished');
        this.router.navigate(['customermaster/confirmationview']);
      } else {
        alert('Data do not insert, please check');
      }
    });
  }
}
