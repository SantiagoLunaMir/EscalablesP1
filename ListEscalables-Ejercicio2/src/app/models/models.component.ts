import { Component } from '@angular/core';

@Component({
  selector: 'app-models',
  imports: [],
  templateUrl: './models.component.html',
  styleUrl: './models.component.css'
})
export class ModelsComponent {

}

export interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  onSale: boolean;
  image?: string;
}