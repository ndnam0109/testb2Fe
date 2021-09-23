import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../modell/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = "http://localhost:8080/user";

  constructor(private http:HttpClient) { }

    findOne(username):Observable<User[]>{
      return this.http.get<User[]>(this.apiUrl+'/findByUserName/'+username);
    }

 
  }