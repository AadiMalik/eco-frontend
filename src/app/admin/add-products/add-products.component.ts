import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { AddProduct } from './data-type';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css'],
})
export class AddProductsComponent {
  message: undefined | string;
  constructor(private product_service: ProductService) {}
  AddProduct(data: AddProduct): void {
    this.product_service.addProduct(data);
    this.message = 'Product Added Successfully!';
  }
}
