import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductDetailComponent } from "../product-detail/product-detail.component";

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  selectedProduct: Product | undefined;
  products: Product[] = [
    { id: 1, title: 'Keyboard' },
    { id: 2, title: 'Microphone' },
    { id: 3, title: 'Web camera' },
    { id: 4, title: 'PS5' }
  ];
  
  onAdded() {
    alert(`${this.selectedProduct?.title} added to the cart!`);
  }
  
}
