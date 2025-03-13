import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-costumeedit',
  templateUrl: './costumeedit.component.html',
  styleUrls: ['./costumeedit.component.scss']
})
export class CostumeeditComponent {
  costumeid: any; // Correct the property name to 'ategoryId' 
  public CostumeArray: any;
  public CategoryArray:any;
  EditCostumeFormGroup!: FormGroup;
  selectedFiles?: FileList;
  currentFile?: any;
  message = '';
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private dbservice: DbserviceService) {
    route.paramMap.subscribe((params: ParamMap) => {
      this.costumeid = params.get('id')
    })

    // this.route.paramMap.subscribe((params: ParamMap) => { 
    //   this.CourseId = params.get('id'); // Use 'CourseId' here 
    // }); 
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
    this.imageupload();
    }
 
  //page load 
  ngOnInit(): void {
    console.log(this.costumeid)
    this.EditCostumeFormGroup = this.fb.group({
      costumeid: [''], // Use 'Costumeid' here 
      costumename: [''],
      categoryid: [''], // Use 'Costumeid' here 

      costumedes: [''],
      price:[''],
      // stock:[''],

      costumeimg: ['']
    

    })

    this.dbservice.categoryview().then((data:any)=>{ 
      this.CategoryArray=data; 
      // console.log(data); 
    }); 

    const id = this.costumeid;
    console.log(id);
    this.dbservice.getcostumedetails({ id }).then((data: any) => { // Use  'Costumeid' here
      this.CostumeArray = data;
      console.log(this.CostumeArray);
      this.EditCostumeFormGroup.setValue({
        costumeid: data[0].costumeid, // Use 'CourseId' here 
        costumename: data[0].costumename,
        categoryid: data[0].categoryid, // Use 'CourseId' here 
        costumedes: data[0].costumedes,
        price: data[0].price,
        // stock: data[0].stock,

        costumeimg: data[0].costumeimg
       
      });
      console.log(this.EditCostumeFormGroup.value)
    });
  }
  //End of page load 

  //Submit code 

  onSubmit() {
    if (!this.EditCostumeFormGroup.value.costumeimg) {
      const data = {
        costumename: this.EditCostumeFormGroup.value.costumename,
        costumeimg:this.CostumeArray[0].costumeimg,
      }
      this.dbservice.updatecostume(data).then((confirmation: any) => {
        alert('costume Details Updated Successfully');
        this.router.navigate(['/shopmaster/costumeview'])
        })
        }
        else{
    this.dbservice.updatecostume(this.EditCostumeFormGroup.value).then((confirmation: any) => {
        // if (confirmation.message === "Success") {

          alert('Costume Details Updated')
          this.router.navigate(['/shopmaster/costumeview'])
      
      })
  }
}

imageupload() { 
  if (this.selectedFiles) { 
   
    const file: File | null = this.selectedFiles.item(0); 
    if (file) { 
      this.currentFile = file; 
      console.log(this.currentFile)
      this.dbservice.upload(this.currentFile).subscribe( 
        (event: any) => { 
          this.message = event.body.message; 
        }); 
   
    } 
    this.EditCostumeFormGroup.value.costumeimg = this.currentFile.name; 
    console.log(this.EditCostumeFormGroup.value); 
  } 
  } 

} 
  

  //End of Submit