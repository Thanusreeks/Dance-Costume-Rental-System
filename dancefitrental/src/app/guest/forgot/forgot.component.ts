import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent {
  forgotform!:FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private dbservice: DbserviceService) {
  this.forgotform = this.formBuilder.group({
    username:[''],
  });
  }
  // get email() {
  // return this.forgot.get('email');
  // }
  get username() {
  return this.forgotform.get('username');
  }
  onSubmit() {
    if (this.forgotform.valid) {
    const usernameValue = this.forgotform.value.username;
    this.dbservice.forgot(this.forgotform.value).then((confirmation: any) =>
    {
    if (confirmation.message === 'Success') {
    const generatedPassword = this.generatePassword();
    this.sendPasswordEmail(usernameValue, generatedPassword);
    alert('Password reset email sent successfully');
    this.router.navigate(['/guestmaster/guestlogin']);
  } else {
    console.log('Error:', confirmation.error);
    }
    });
    }
    }
    private generatePassword(): string {
    return 'generatedPassword';
    }
    private sendPasswordEmail(username: string, password: string): void {
    console.log('Sending email to:', this.username);
    console.log('Temporary password:', password);
    }
    }
