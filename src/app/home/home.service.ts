import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http : HttpClient) { }

  getMedicineList() {
    const localUrl = './assets/json/medicines.json';
    return this.http.get(localUrl);
  }
  
}
