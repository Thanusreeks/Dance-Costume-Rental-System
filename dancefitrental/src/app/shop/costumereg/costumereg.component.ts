import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-costumereg',
  templateUrl: './costumereg.component.html',
  styleUrls: ['./costumereg.component.scss']
})
export class CostumeregComponent {
  public CategoryArray:any=[]
  public CostumeArray:any=[]
  selectedFiles?: FileList; 
  currentFile?: any; 
  message = ''; 
  fileInfos?: Observable<any>; 
  loginid:any
  costumeregform!:FormGroup;


  constructor(private fb:FormBuilder,private router:Router,private dbservice:DbserviceService) { } 
  





ngOnInit(): void { 


  
this.costumeregform=this.fb.group({ 
    categoryid:[''],
    costumename:[''],
    costumeimg:[''],
    costumedes:[''],
    price:[''],
    stock:[''],

    loginid:this.loginid=localStorage.getItem('loginid')
  
   
  }) 
      
       
  this.dbservice.categoryview().then((data:any)=>{
    this.CategoryArray=data
  })
            }

            
//Fileupload

selectFile(event: any): void { 
  this.selectedFiles= event.target.files; 
} 
//End of upload


//insert
Onsubmit(){ 
    
 
  if (this.selectedFiles ) 
  { 
// console.log(this.selectedFiles); 

    const file: File | null = this.selectedFiles.item(0); 
    //const file1: File | null = this.selectedFiles1.item(0); 

    if (file) { 
      this.currentFile = file; 
      // this.currentFile1 = file1; 

      this.dbservice.upload(this.currentFile).subscribe( 
        (event: any) => { 
            this.message = event.body.message; }) ; 

      // this.dbservice.upload(this.currentFile1).subscribe( 
      //  (event: any) => { 
      //  this.message = event.body.message; }) ; 
          } }  

             

       this.costumeregform.value.costumeimg=this.currentFile.name; 
      //  this.productregistration.value.productimage1=this.currentFile1.name; 
            // console.log(this.productimage); 
             
              this.dbservice.costumereg(this.costumeregform.value).then((confirmation:any)=> 
 {
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
//endofinsert

}