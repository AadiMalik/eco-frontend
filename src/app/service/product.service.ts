import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { Product } from '../data-type/product-type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private route: Router) {}
  getProducts() {
    return this.http.get<Product[]>(
      'http://localhost/EcoApi/api/list-products'
    );
  }
  addProduct(data: Product) {
    this.http
      .post('http://localhost/EcoApi/api/add-product', data, {
        observe: 'response',
      })
      .subscribe((result) => {
        this.route.navigateByUrl('/admin/products');
      });
  }
  getProductById(id: string) {
    return this.http.get<Product>(
      'http://localhost/EcoApi/api/edit-product/' + id
    );
  }
  updateProduct(data: Product) {
    this.http
      .post('http://localhost/EcoApi/api/update-product', data, {
        observe: 'response',
      })
      .subscribe((result) => {
        this.route.navigateByUrl('/admin/products');
      });
  }
  deleteProductById(id: number) {
    return this.http.get('http://localhost/EcoApi/api/delete-product/' + id);
  }
}
