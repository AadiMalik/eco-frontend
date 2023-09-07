import { Injectable } from '@angular/core';
import { AddProduct } from '../admin/add-products/data-type';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private route: Router) {}
  getProducts() {
    return this.http.get<AddProduct[]>('http://localhost/EcoApi/api/list-products');
  }
  addProduct(data:AddProduct) {
    this.http
      .post('http://localhost/EcoApi/api/add-product', data, {
        observe: 'response',
      })
      .subscribe((result) => {
        this.route.navigateByUrl('/admin/products');
      });
  }
}
