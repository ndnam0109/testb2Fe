import { Question } from './../../modell/cauhoi';
import { Category } from './../../modell/category';
import { CategoryService } from './../../service/category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.scss']
})
export class ChitietComponent implements OnInit {
  nameCategory:string;
  idCategory:number;
  data:any[];
  listCategory:Category[];
  category:Category;
  listQuestion:Question[];
  
  constructor( private categoryService:CategoryService,
     private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.idCategory =parseInt(this.route.snapshot.paramMap.get('idCategory')) ;
    this.getList();
    this.findOne();
  }

  getList(){
    this.listCategory=new Array();
    this.categoryService.getAll().subscribe(res=>{
      this.data=res;
      this.data.forEach(element => {
        let category = new Category();
        category.idCategory=element['idCategory'];
        category.name=element['tenCategory'];
        this.listCategory.push(category);
      });
    })
  }

  find(id){
    this.categoryService.findOne(id).subscribe(res=>{
      this.listQuestion=res['listCauHoi'];
      this.idCategory=res['idCategory'];
      this.nameCategory=res['tenCategory']
      this.listQuestion.forEach(element => {
        var num:number=1;
        element.stt=num;
        num++;
      });
      this.nameCategory=res['tenCategory'];
    })
  }

  findOne(){
    this.find(this.idCategory);
  }

  change(item){
   
    
    this.idCategory=item.idCategory;
    
    
    this.find(this.idCategory);

  }

 

}
