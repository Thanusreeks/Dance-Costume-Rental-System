import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-categoryreg',
  templateUrl: './categoryreg.component.html',
  styleUrls: ['./categoryreg.component.scss']
})
export class CategoryregComponent {
  public CategoryArray: any[] = [];
  validationstatus = null;

  selectedFiles?: FileList;
  currentFile?: any;
  message = '';
  fileInfos?: Observable<any>;

  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbserviceService) { }


  categoryregform = this.fb.group({
    categoryname: ['',[Validators.required,Validators.pattern(/^[A-Z][a-zA-z\s\w]*$/)]],
    catdescription: [''],
    catimage: ['',[Validators.required]]


  })

  //Fileupload
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  //end of Fileupload

  //insert

  Onsubmit() {
    if(this.categoryregform.invalid){
      this.validationstatus ="";
      alert('Please Enter data')
  
      return
    } 
  else{
    this.validationstatus =null;
  }
    if (this.selectedFiles) {

      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.dbservice.upload(this.currentFile).subscribe((event: any) => {
          this.message = event.body.message;
        });



      }
    }
    this.categoryregform.value.catimage = this.currentFile.name;


    this.dbservice.categoryreg(this.categoryregform.value).then((confirmation: any) => {
        if (confirmation.message == "Success") {
        alert('Registered Successfully')
        this.router.navigate(['adminmaster/categoryview'])
      }
      else {
        alert('Data already exist')
      }
    })

  }
  //endofinsert

}


