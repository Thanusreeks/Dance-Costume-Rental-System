import { HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {
  group(arg0: {
    username: string[]; password: string[]; //end of districtreg
    newpassword1: string[]; newpassword2: string[]; loginid: string;
  }): any {
    throw new Error('Method not implemented.');
  }
  // upload(currentFile: any) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private http: HttpClient) { }
  //
  login(data: any) {
    return this.http.post("http://localhost:3000/login", data).toPromise();
  }
  //end of login
  districtreg(data: any) {
    return this.http.post("http://localhost:3000/districtreg", data).toPromise();
  }
  //end of districtreg

  // locationreg start
  locationreg(data: any) {
    return this.http.post("http://localhost:3000/locationreg", data).toPromise();
  }
  //end of locationreg

  // districtview start

  districtview() {
    return this.http.get("http://localhost:3000/districtview").toPromise();
  }
  //end of district view


  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `http://localhost:3000/upload`,
      formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

  // categoryreg start
  categoryreg(data: any) {
    return this.http.post("http://localhost:3000/categoryreg", data).toPromise();
  }
  //end of category reg

  // category view start


  categoryview() {
    return this.http.get("http://localhost:3000/categoryview").toPromise();
  }
  //end of category view

  // location view start


  locationview() {
    return this.http.get("http://localhost:3000/locationview").toPromise();
  }
  //end of location view
  // location Get District

  getdistrictbyid(data: any) {
    return this.http.post("http://localhost:3000/getdistrict", data).toPromise();
  }
  //end of Get District
  DeleteLocationArray(data: any) {
    return this.http.post("http://localhost:3000/locationdelete", data).toPromise()
  }
  DeleteCategoryArray(data: any) {
    return this.http.post("http://localhost:3000/categorydelete", data).toPromise()
  }
  shopreg(data: any) {
    return this.http.post("http://localhost:3000/shopreg", data).toPromise();
  }
  //get categorydetails
  getcategorydetails(data: any) {
    return this.http.post<any>("http://localhost:3000/getcategorydetails", data).toPromise()
  }
  //End of category details
  //updatecategorydata
  updatecategory(data: any) {
    return this.http.post("http://localhost:3000/updatecategory", data).toPromise()
  }
  //End of update
  //get getlocationdetails
  getlocationdetails(data: any) {
    return this.http.post<any>("http://localhost:3000/getlocationdetails", data).toPromise()
  }
  //End of location details
  //updatelocation
  updatelocation(data: any) {
    return this.http.post("http://localhost:3000/updatelocation", data).toPromise()
  }
  //End of update
  customerreg(data: any) {
    return this.http.post("http://localhost:3000/customerreg", data).toPromise();
  }
  // costumereg start
  costumereg(data: any) {
    return this.http.post("http://localhost:3000/costumereg", data).toPromise();
  }
  //end of costumereg 
  // Costume view start


  costumeview(data: any) {
    return this.http.post("http://localhost:3000/costumeview", data).toPromise()
  }
  //end of costume view
  DeleteCostumeArray(data: any) {
    return this.http.post("http://localhost:3000/costumedelete", data).toPromise()
  }
  getcostumedetails(data: any) {
    return this.http.post<any>("http://localhost:3000/getcostumedetails", data).toPromise()
  }
  updatecostume(data: any) {
    return this.http.post("http://localhost:3000/updatecostume", data).toPromise()
  }
  shopview() {
    return this.http.get("http://localhost:3000/shopview").toPromise();
  }
  ConfirmshopArray(data: any) {
    return this.http.post("http://localhost:3000/shopconfirm", data).toPromise()
  }
  confirmedshopview() {
    return this.http.get("http://localhost:3000/confirmedshopview").toPromise()
  }
  Rejectdata(data: any) {
    return this.http.post("http://localhost:3000/shopreject", data).toPromise()
  }
  customerview() {
    return this.http.get("http://localhost:3000/customerview").toPromise();
  }
  getshopdetails(data: any) {
    return this.http.post<any>("http://localhost:3000/getshopdetails", data).toPromise()
  }
  updateshop(data: any) {
    return this.http.post("http://localhost:3000/updateshop", data).toPromise()
  }
  shopprofile(data: any) {
    return this.http.post("http://localhost:3000/shopprofile",data).toPromise();
  }
  customerprofile(data: any) {
    return this.http.post("http://localhost:3000/customerprofile",data).toPromise();
  }
  getcustomerdetails(data: any) {
    return this.http.post<any>("http://localhost:3000/getcustomerdetails",data).toPromise()
  }
  updatecustomer(data: any) {
    return this.http.post("http://localhost:3000/updatecustomer",data).toPromise()
  }
  viewcostume(data: any) {
    return this.http.post("http://localhost:3000/viewcostume",data).toPromise();
  }
  viewmorecostume(data: any) {
    return this.http.post("http://localhost:3000/viewmorecostume",data).toPromise();
  }
  request(data: any) {
    return this.http.post("http://localhost:3000/request",data).toPromise();
 
 }
 requestview(data:any)
  {
  return this.http.post<any>("http://localhost:3000/requestview",data).toPromise();
}
Rejectrequest(data: any) {
  return this.http.post("http://localhost:3000/requestreject", data).toPromise()
}
confirmrequestArray(data: any) {
  return this.http.post("http://localhost:3000/requestconfirm", data).toPromise()
}
confirmedrequestview(data: any) {
  return this.http.post<any>("http://localhost:3000/confirmedrequest",data).toPromise()
}
changestock(data: any) {
  return this.http.post("http://localhost:3000/changestock",data).toPromise();

}
// to get costume details 
shopdetailsbyid(data: any) {
  return this.http.post("http://localhost:3000/shopdetailsbyid",data).toPromise();

}
requestdetailsbyid(data: any) {
  return this.http.post("http://localhost:3000/requestdetailsbyid",data).toPromise();
}
payment(data: any) {
  return this.http.post("http://localhost:3000/payment",data).toPromise();

}
shopreport() {
  return this.http.get("http://localhost:3000/shopreport").toPromise();
}
customerreport() {
  return this.http.get("http://localhost:3000/customerreport").toPromise();
}
rejectrequestArray(data: any) {
  return this.http.post("http://localhost:3000/requestreject", data).toPromise()
}
datewisereport(data: any) {
  return this.http.post("http://localhost:3000/datewisereport", data).toPromise()
}
costumepie() {
  return this.http.get("http://localhost:3000/costumepie").toPromise();
}
categorypie() {
  return this.http.get("http://localhost:3000/categorypie").toPromise();
}
forgot(data:any) {
  return this.http.post("http://localhost:3000/forgotpassword",data).toPromise();
}
changepassword(data:any){
  return this.http.post("http://localhost:3000/changepassword",data).toPromise()
}
paymentview(data:any)
  {
  return this.http.post<any>("http://localhost:3000/paymentview",data).toPromise();
}
}

