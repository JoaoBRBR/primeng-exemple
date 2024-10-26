import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-fields',
  standalone: true,
  imports: [
    TableModule
  ],
  templateUrl: './fields.component.html',
  styleUrl: './fields.component.css'
})
export class FieldsComponent {

  public customers = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1001',
      code: 'n43n1n3n4',
      name: 'Slim Shirt',
      description: 'Product Description',
      image: 'slim-shirt.jpg',
      price: 30,
      category: 'Clothing',
      quantity: 50,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: '1002',
      code: 'r34t33t43',
      name: 'Apple Watch',
      description: 'Product Description',
      image: 'apple-watch.jpg',
      price: 299,
      category: 'Electronics',
      quantity: 10,
      inventoryStatus: 'LOWSTOCK',
      rating: 5
    },
    {
      id: '1003',
      code: 't43t43t43',
      name: 'Laptop Bag',
      description: 'Product Description',
      image: 'laptop-bag.jpg',
      price: 40,
      category: 'Accessories',
      quantity: 20,
      inventoryStatus: 'OUTOFSTOCK',
      rating: 3
    },
    {
      id: '1004',
      code: 'y43y43y43',
      name: 'Running Shoes',
      description: 'Product Description',
      image: 'running-shoes.jpg',
      price: 80,
      category: 'Footwear',
      quantity: 15,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: '1005',
      code: 'z12x12x12',
      name: 'Gaming Keyboard',
      description: 'Product Description',
      image: 'gaming-keyboard.jpg',
      price: 120,
      category: 'Electronics',
      quantity: 8,
      inventoryStatus: 'LOWSTOCK',
      rating: 4
    },
    {
      id: '1006',
      code: 'q24q24q24',
      name: 'Leather Wallet',
      description: 'Product Description',
      image: 'leather-wallet.jpg',
      price: 45,
      category: 'Accessories',
      quantity: 35,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: '1007',
      code: 'v45v45v45',
      name: 'Sports Watch',
      description: 'Product Description',
      image: 'sports-watch.jpg',
      price: 150,
      category: 'Electronics',
      quantity: 12,
      inventoryStatus: 'LOWSTOCK',
      rating: 5
    },
    {
      id: '1008',
      code: 'd56d56d56',
      name: 'Bluetooth Speaker',
      description: 'Product Description',
      image: 'bluetooth-speaker.jpg',
      price: 85,
      category: 'Electronics',
      quantity: 25,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1009',
      code: 'm34m34m34',
      name: 'Formal Shoes',
      description: 'Product Description',
      image: 'formal-shoes.jpg',
      price: 100,
      category: 'Footwear',
      quantity: 18,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: '1010',
      code: 'p65p65p65',
      name: 'Designer Sunglasses',
      description: 'Product Description',
      image: 'designer-sunglasses.jpg',
      price: 95,
      category: 'Accessories',
      quantity: 50,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1011',
      code: 'x78x78x78',
      name: 'Wireless Earbuds',
      description: 'Product Description',
      image: 'wireless-earbuds.jpg',
      price: 70,
      category: 'Electronics',
      quantity: 40,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1012',
      code: 'c34c34c34',
      name: 'Casual Sneakers',
      description: 'Product Description',
      image: 'casual-sneakers.jpg',
      price: 60,
      category: 'Footwear',
      quantity: 30,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: '1013',
      code: 'g12g12g12',
      name: 'Graphic T-Shirt',
      description: 'Product Description',
      image: 'graphic-tshirt.jpg',
      price: 20,
      category: 'Clothing',
      quantity: 60,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: '1014',
      code: 'r12r12r12',
      name: 'Smartphone Stand',
      description: 'Product Description',
      image: 'smartphone-stand.jpg',
      price: 25,
      category: 'Electronics',
      quantity: 15,
      inventoryStatus: 'INSTOCK',
      rating: 3
    },
    // Add 85 more entries to complete the list of 100 items
    // Each new item should have a unique 'id', 'code', and varied details
  ];
  
}
