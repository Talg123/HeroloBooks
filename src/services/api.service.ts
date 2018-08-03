import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: Http) { }
  /**
   * get the books list with http request
   */
  public getList(){
    return this.http.get('https://api.myjson.com/bins/l15qo');
              
  }

}
