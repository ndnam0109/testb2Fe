import { Jwt } from './../modell/jwt';
import { Login } from './../modell/login';
import { User } from './../modell/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) { }

  public addNew(user: User): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'newUser', user);
  }

  public login(login: Login): Observable<Jwt> {
    return this.httpClient.post<Jwt>(this.authURL + 'login', login);
  }

   forgot(email:string){
    return this.httpClient.post(this.authURL+'forgot-password?email='+email,email);
  }

  reset(token:string,password:string){
    return this.httpClient.put(this.authURL+'reset-password?token='+token+'&password='+password,token)
  }
}
