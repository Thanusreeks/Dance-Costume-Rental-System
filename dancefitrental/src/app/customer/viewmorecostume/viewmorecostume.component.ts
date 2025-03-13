import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-viewmorecostume',
  templateUrl: './viewmorecostume.component.html',
  styleUrls: ['./viewmorecostume.component.scss']
})
export class ViewmorecostumeComponent {
  public CostumeArray:any=[]
  

  costumeid:any;
  viewmorecostumeform!:FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private dbservice: DbserviceService) {
    route.paramMap.subscribe((params: ParamMap) => {
      this.costumeid = params.get('id')
    })
}
  //api calling
  ngOnInit(): void 
   {

    const id = this.costumeid;
     this.dbservice.viewmorecostume({id}).then((data:any)=>{
 
       this.CostumeArray=data;
      console.log(this.CostumeArray);
    })
   }
}
