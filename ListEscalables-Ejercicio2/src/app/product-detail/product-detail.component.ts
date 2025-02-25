import { Component, Input } from '@angular/core';
import { Product } from '../models/models.component';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [NgIf,NgClass],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() product?: Product;
}
