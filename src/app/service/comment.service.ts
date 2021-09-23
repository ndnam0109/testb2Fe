import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiUrl = "http://localhost:8080/comment";

  constructor(private http: HttpClient){ }

   getAll():Observable<Comment[]>{
       return this.http.get<Comment[]>(this.apiUrl+'/list');
   }

   save(comment){
    return this.http.post(this.apiUrl+'/save',comment);
  }
  }
