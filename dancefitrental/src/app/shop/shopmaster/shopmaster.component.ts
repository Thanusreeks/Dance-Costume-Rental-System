import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-shopmaster',
  templateUrl: './shopmaster.component.html',
  styleUrls: ['./shopmaster.component.scss']
})
export class ShopmasterComponent {
  constructor(private router: Router, private dbService: DbserviceService) { }
  loginid: any;
  Logout() {
  console.log('Logout button clicked');
  console.log('Before Logout:', localStorage.getItem('loginid'));
  localStorage.removeItem('loginid');
  console.log('After Logout:', localStorage.getItem('loginid'));
  alert('logout successfully');
  this.router.navigate(['guestmaster/guestlogin']);
  }
  ngOnInit(): void {
  const loginid = localStorage.getItem('loginid');
  if (!loginid) {
  // If loginid is not present, redirect to the login page
  this.router.navigate(['guestmaster/guestlogin']);
  }
  }}
