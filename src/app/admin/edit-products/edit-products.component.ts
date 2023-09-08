import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { AddProduct } from '../add-products/data-type';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css'],
})
export class EditProductsComponent {
  product: undefined | AddProduct;
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

  UpdateProduct(data: AddProduct): void {
    if(this.product){
      data.id=this.product.id;
    }
    this.product_service.updateProduct(data);
  }
}
