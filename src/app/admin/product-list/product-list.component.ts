import { Component } from '@angular/core';
import { Product } from 'src/app/data-type/product-type';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: undefined | Product[];
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
