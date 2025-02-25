import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './models/models.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ProductDetailComponent } from "./product-detail/product-detail.component";

@Component({
  selector: 'app-root',
  imports: [NgFor, NgIf, NgClass, ProductDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ListEscalables';
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 1500, inStock: true,  onSale: false, image: 'https://m.media-amazon.com/images/I/61v6TUlhpzL.jpg' },
    { id: 2, name: 'Smartphone', price: 800,  inStock: true,  onSale: true,  image: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/P9P9PThumbnail_16x9_Opt2.jpg' },
    { id: 3, name: 'Tablet', price: 400,    inStock: false, onSale: false, image: 'https://m.media-amazon.com/images/I/71YZxO0GBSL.jpg' },
    { id: 4, name: 'Monitor', price: 200,   inStock: true,  onSale: true,  image: 'https://mx-media.hptiendaenlinea.com/magefan_blog/hero-monitor-gaming-34.jpg' },
    { id: 5, name: 'Teclado mecánico', price: 100, inStock: true, onSale: false, image: 'https://m.media-amazon.com/images/I/71yGtauB-AL._AC_SL1500_.jpg' },
    { id: 6, name: 'Mouse inalámbrico', price: 50,  inStock: false, onSale: false, image: 'https://m.media-amazon.com/images/I/615H13dcOUL._AC_UF894,1000_QL80_.jpg' },
    { id: 7, name: 'Impresora láser', price: 250, inStock: true,  onSale: true,  image: 'https://cdn.thewirecutter.com/wp-content/media/2024/08/laserprinters-2048px-02603-3x2-1.jpg?auto=webp&quality=75&crop=4:3,smart&width=1024' },
    { id: 8, name: 'Auriculares Bluetooth', price: 120, inStock: true, onSale: false, image: 'https://www.beatsbydre.com/content/dam/beats/web/product/headphones/solo4-wireless/pdp/product-carousel/slate-blue/blue-01-solo4.jpg' },
    { id: 9, name: 'Silla ergonómica', price: 300, inStock: false, onSale: true,  image: 'https://m.media-amazon.com/images/I/71EtO0GUJhL.jpg' },
    { id: 10, name: 'Micrófono profesional', price: 180, inStock: true, onSale: false, image: 'https://m.media-amazon.com/images/I/81atqMlP6zL._AC_UF894,1000_QL80_.jpg' },
    { id: 11, name: 'Disco SSD 1TB', price: 220, inStock: true, onSale: true,  image: 'https://http2.mlstatic.com/D_NQ_NP_679603-MLU78081536569_072024-O.webp' },
    { id: 12, name: 'Cámara web 1080p', price: 90, inStock: true, onSale: false, image: 'https://cdn.thewirecutter.com/wp-content/media/2023/09/webcams-2048px-02096.jpg?auto=webp&quality=75&width=1024' },
    { id: 13, name: 'Router Wi-Fi 6', price: 160, inStock: false, onSale: true, image: 'https://microless.com/cdn/products/667a7b82dbee1375902c88dac16f66d3-hi.jpg' },
    { id: 14, name: 'Tarjeta gráfica RTX 4060', price: 500, inStock: true, onSale: false, image: 'https://ss628.liverpool.com.mx/xl/1155438327.jpg' },
    { id: 15, name: 'Smartwatch', price: 250, inStock: true, onSale: true,  image: 'https://m.media-amazon.com/images/I/61VVeNXaw4L.jpg' },
  ];  
  selectedProduct?: Product;

  selectProduct(product: Product): void {//Metodo donde se seleccina un producto
    this.selectedProduct = this.selectedProduct?.id === product.id ? undefined : product;
  }  
}
