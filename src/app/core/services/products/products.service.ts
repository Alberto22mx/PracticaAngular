import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }
  getAllProducts() {
    return this.http.get('http://platzi-store.herokuapp.com/products');
  }
  getProdcut(id: string) {
    return this.http.get(`'http://platzi-store.herokuapp.com/products/${id}'`);
  }

}
