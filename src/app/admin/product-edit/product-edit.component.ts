import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/data-type/product-type';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent {
  product: undefined | Product;
  constructor(
    private product_service: ProductService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    let product_id = this.route.snapshot.paramMap.get('id');
    product_id &&
      this.product_service.getProductById(product_id).subscribe((response) => {
        console.log(response);
        this.product = response;
      });
  }

  UpdateProduct(data: Product): void {
    if (this.product) {
      data.id = this.product.id;
    }
    this.product_service.updateProduct(data);
  }
}
