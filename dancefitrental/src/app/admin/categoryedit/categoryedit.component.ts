import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-categoryedit',
  templateUrl: './categoryedit.component.html',
  styleUrls: ['./categoryedit.component.scss']
})
export class CategoryeditComponent {
  categoryid: any; // Correct the property name to 'ategoryId' 
  public CategoryArray: any;
  EditCategoryFormGroup!: FormGroup;
  selectedFiles?: FileList;
  currentFile?: any;
  message = '';
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private dbservice: DbserviceService) {
    route.paramMap.subscribe((params: ParamMap) => {
      this.categoryid = params.get('id')
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
    console.log(this.categoryid)
    this.EditCategoryFormGroup = this.fb.group({
      categoryid: [''], // Use 'CategoryId' here 
      categoryname: [''],
      catdescription: [''],
      catimage: ['']

    })
    const id = this.categoryid;
    console.log(id);
    this.dbservice.getcategorydetails({ id }).then((data: any) => { // Use  'Categoryid' here
      this.CategoryArray = data;
      console.log(this.CategoryArray);
      this.EditCategoryFormGroup.setValue({
        categoryid: data[0].categoryid, // Use 'CourseId' here 
        categoryname: data[0].categoryname,
        catdescription: data[0].catdescription,
        catimage: data[0].catimage,

      });
      console.log(this.EditCategoryFormGroup.value)
    });
  }
  //End of page load 

  //Submit code 

  onSubmit() {
    if (!this.EditCategoryFormGroup.value.catimage) {
      const data = {
      categoryname: this.EditCategoryFormGroup.value.categoryname,
      catimage:this.CategoryArray[0].catimage,
      }
      this.dbservice.updatecategory(data).then((confirmation: any) => {
        alert('category Details Updated Successfully');
        this.router.navigate(['/adminmaster/categoryview'])
        })
        }
        else{
    this.dbservice.updatecategory(this.EditCategoryFormGroup.value).then((confirmation: any) => {
        // if (confirmation.message === "Success") {

          alert('Category Details Updated')
          this.router.navigate(['/adminmaster/categoryview'])
      
      })
  }
}
// imageupload() {
//   if (this.selectedFiles) {
//   const file: File | null = this.selectedFiles.item(0);
//   if (file) {
//   this.currentFile = file;
//   console.log(this.currentFile)
 
//   this.dbservice.upload(this.currentFile).subscribe(
//   (event: any) => {
//   this.message = event.body.message;
//   });
//   }
//   this.EditCategoryFormGroup.value.image = this.currentFile.name;
//   console.log(this.EditCategoryFormGroup.value);
//   }
//   }
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
    this.EditCategoryFormGroup.value.catimage = this.currentFile.name; 
    console.log(this.EditCategoryFormGroup.value); 
  } 
  } 

} 
  

  //End of Submit