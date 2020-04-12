import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

const url = 'http://localhost:3004/';

@Injectable({
  providedIn: 'root'
})
export class UsageService {

constructor(private http: HttpClient) { }

   getUsage(): Observable<any> {
    return this.http.get(url + 'data');
  }

  getTotallUsage(): Observable<any> {
    return this.http.get(url + 'total');
  }
}
