import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-guestlogin',
  templateUrl: './guestlogin.component.html',
  styleUrls: ['./guestlogin.component.scss']
})
export class GuestloginComponent {
  public LoginArray: any[] = [];

  validationstatus = null;

  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbserviceService) { }
  LoginFormGroup = this.fb.group({
    username: ['',[Validators.required]],
    password: ['', Validators.pattern('[a-zA-Z0-9]*')]
  })
  Onsubmit() {
    // console.log(this.LoginFormGroup.value)
    this.dbservice.login(this.LoginFormGroup.value).then((data: any) => {
      this.LoginArray = data;
      // console.log(data)
      if (data == "") {
        alert('invalid username and password')
        this.router.navigate(['/guestmaster/guestlogin'])
        return
      }
      else {
        // console.log(this.LoginArray)
        var role = this.LoginArray[0].role;
        // console.log(role)
        localStorage.setItem("loginid", this.LoginArray[0].loginid);
        localStorage.setItem("shopid", this.LoginArray[0].shopid);

        localStorage.setItem("username", this.LoginArray[0].username)
        var status = this.LoginArray[0].status;
        // console.log(status)
        if (role == "admin" ) {
          this.router.navigate(['/adminmaster/adminhome'])
        }
        else if(role == "shop" && status=="confirmed") {
          this.router.navigate(['/shopmaster/shophome'])
        }
        else if(role == "customer")
        {
          this.router.navigate(['/customermaster/customerhome'])
        }
        else
        {
          alert("You are not an authorized person")
        }
      }
    })
  }
  // alert('success')
  ngOnInit(): void {
  }
}
