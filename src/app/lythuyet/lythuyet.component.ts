
import { Component, OnInit } from '@angular/core';
import { Category } from '../modell/category';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-lythuyet',
  templateUrl: './lythuyet.component.html',
  styleUrls: ['./lythuyet.component.scss']
})
export class LythuyetComponent implements OnInit {
  nameCategory:string;
  data:any[];
  listCategory:Category[];
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getList();
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

}
