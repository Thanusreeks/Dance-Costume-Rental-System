import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-changestock',
  templateUrl: './changestock.component.html',
  styleUrls: ['./changestock.component.scss']
})
export class ChangestockComponent {

  public CostumeArray: any = []


costumeid:any;
  loginid: any
  changestockform!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private dbservice: DbserviceService) {
    route.paramMap.subscribe((params: ParamMap) => {
      this.costumeid = params.get('id')
    })}

  ngOnInit(): void {
    this.changestockform = this.fb.group({
      costumeid: [''],
      costumename: [''],
      stock: [''],
      new_stock: [''],
      loginid: ['']
    
      
     

    });
  this.loginid=localStorage.getItem('loginid')
      const id = this.loginid;
      let costumeid=this.costumeid
      console.log(id);
      this.dbservice.shopdetailsbyid({ id:this.loginid,costumeid:this.costumeid }).then((data: any) => { // Use  'Costumeid' here
        this.CostumeArray = data;
        console.log(this.CostumeArray);
        this.changestockform.setValue({
          costumeid:data[0].costumeid,
          costumename: data[0].costumename,
          stock: data[0].stock,
          new_stock:"",
          loginid:this.loginid
         
        });
        console.log(this.changestockform.value)
      });  

  }
  Onsubmit(){
    this.dbservice.changestock(this.changestockform.value).then((confirmation:any)=>{
     //console.log(confirmation);
     if (confirmation.message == "Success") 
         {
           alert('Registered Successfully')
           this.router.navigate(['shopmaster/costumeview'])
         }
         else 
         {
           alert('Data do not insert,please check')
         }
       })
   
                 }
   
  }