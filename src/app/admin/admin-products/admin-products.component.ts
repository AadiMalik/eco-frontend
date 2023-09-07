import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { AddProduct } from '../add-products/data-type';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent {
  products: undefined | AddProduct[];
  constructor(private product: ProductService) {}
  ngOnInit(): void {
    this.product.getProducts().subscribe((response) => {
      console.log(response);
      this.products = response;
    });
  }
}
