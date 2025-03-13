import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-categoryview',
  templateUrl: './categoryview.component.html',
  styleUrls: ['./categoryview.component.scss']
})
export class CategoryviewComponent {
  public CategoryArray: any = []
  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbserviceService) { }
  //api calling
  ngOnInit(): void {
    this.dbservice.categoryview().then((data: any) => {

      this.CategoryArray = data
    });
  }

   //New code for delete

confirmDelete(categoryid: any): void {
  const confirmDelete = window.confirm('Are you sure you want to delete?');

  if (confirmDelete) {
    // User clicked "OK", perform the deletion
    this.DeleteCategoryArray(categoryid);
  } 
  else 
  {
    // User clicked "Cancel", do nothing or handle accordingly
  }
}

//End of new code for delete
  DeleteCategoryArray(categoryid: string) {
    this.dbservice.DeleteCategoryArray({ categoryid }).then((confirmation: any) => {
      if (confirmation.message === "Success") {
        alert('Sucessfully Deleted')
        this.dbservice.categoryview();

      }
    })

  }
}
