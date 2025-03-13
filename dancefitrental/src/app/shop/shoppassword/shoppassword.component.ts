import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-shoppassword',
  templateUrl: './shoppassword.component.html',
  styleUrls: ['./shoppassword.component.scss']
})
export class ShoppasswordComponent {
public changepassword:any;
constructor(private fb:FormBuilder,private router:Router,private dbservice:DbserviceService) { } 

  ngOnInit(): void
  {
    this.changepassword=this.fb.group({
      username:[''],
      password:[''],
      newpassword1:[''],
      newpassword2:[''],
      loginid:localStorage.getItem("loginid")
    });
  }
  onSubmit() {
    const pass1=this.changepassword.value.newpassword1;
    const pass2=this.changepassword.value.newpassword2;
    console.log(pass1,pass2)
    if (pass1 == pass2) {
      
      this.dbservice.changepassword(this.changepassword.value).then((confirmation: any) => {
        if (confirmation.message === 'Invalid') {
          alert('username or password does not exist');
          this.router.navigate(['/shopmaster/shoppassword']);
        }
        else{
          alert('Password Updated');
          this.router.navigate(['/shopmaster/shophome']);
        }
      });
    }
    else
    {
      alert('Check the new password');
      this.router.navigate(['/shopmaster/shoppassword']);

    }
  }
}
