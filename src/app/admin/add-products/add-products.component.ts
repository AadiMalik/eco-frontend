import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { AddProduct } from './data-type';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css'],
})
export class AddProductsComponent {
  constructor(private product: ProductService) {}
  AddProduct(data: AddProduct): void {
    this.product.addProduct(data);
  }
}
