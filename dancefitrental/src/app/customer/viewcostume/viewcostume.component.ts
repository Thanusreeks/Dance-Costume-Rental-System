import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-viewcostume',
  templateUrl: './viewcostume.component.html',
  styleUrls: ['./viewcostume.component.scss']
})
export class ViewcostumeComponent {
  public CategoryArray:any=[]
  public CostumeArray:any=[]
  categoryid:any;
  viewcostumeform!:FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private dbservice: DbserviceService) {
    route.paramMap.subscribe((params: ParamMap) => {
      this.categoryid = params.get('id')
    })
}
  //api calling
  ngOnInit(): void 
   {

    const id = this.categoryid;
     this.dbservice.viewcostume({id}).then((data:any)=>{
 
       this.CostumeArray=data;
      console.log(this.CostumeArray);
    })
   }
}