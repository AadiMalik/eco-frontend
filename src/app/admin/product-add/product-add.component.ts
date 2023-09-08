import { Component } from '@angular/core';
import { Product } from 'src/app/data-type/product-type';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent {
  message: undefined | string;
  constructor(private product_service: ProductService) {}
  AddProduct(data: Product): void {
    this.product_service.addProduct(data);
    this.message = 'Product Added Successfully!';
  }
}
