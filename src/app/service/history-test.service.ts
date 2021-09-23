import { HistoryTest } from './../modell/historyTest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryTestService {

  private apiUrl = "http://localhost:8080/history";

  constructor(private http: HttpClient){ }

   getAll(userName):Observable<HistoryTest[]>{
       return this.http.get<HistoryTest[]>(this.apiUrl+'/list?userName='+userName);
   }
   save(history){
     return this.http.post(this.apiUrl+'/save',history);
   }

}
