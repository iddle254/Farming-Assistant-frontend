import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  SERVER_URL = environment.SERVER_URL;
  constructor(private http: HttpClient) { }

  /* Fetch products from backend server
  getAllProducts(){
    return this.http.get<serverResponse>(this.url + 'products', {
      params: {
        limit: limitOfResults.toString() --!>
  }
}); */
}
