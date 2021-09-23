import { Category } from './../modell/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = "http://localhost:8080/category";

  constructor(private http: HttpClient){ }

   getAll():Observable<Category[]>{
       return this.http.get<Category[]>(this.apiUrl+'/list');
   }

   findOne(id){
     return this.http.get(this.apiUrl+'/'+id);
   }

  
}
