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
  message: undefined | string;
  constructor(private product_service: ProductService) {}
  ngOnInit(): void {
    this.product_service.getProducts().subscribe((response) => {
      console.log(response);
      this.products = response;
    });
  }
  deleteProduct(id: number) {
    this.product_service.deleteProductById(id).subscribe((response) => {
      if (response) {
        this.message = 'Product Delete Successfully!';
        this.ngOnInit();
      }
    });
    setTimeout(() => {
      this.message = undefined;
    }, 2000);
  }
}
