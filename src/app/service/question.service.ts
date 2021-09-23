import { Question } from './../modell/cauhoi';
import { observable, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Component } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })

  export class QuestionService {

      private apiUrl = "http://localhost:8080/testB2/question";

       constructor(private http: HttpClient){ }

        getAll():Observable<Question[]>{
            return this.http.get<Question[]>(this.apiUrl+'/listTest');
        }

        

        
}
  
