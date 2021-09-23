import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepCommentService {

  
  private apiUrl = "http://localhost:8080/repComment";

  constructor(private http: HttpClient){ }

   

   save(repComment){
    return this.http.post(this.apiUrl+'/save',repComment);
  }
}
