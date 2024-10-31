import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Iproducts[] = [
    { id: 1, name: 'E assim que acaba', price: 45.0, description: 'Robert Stevenson', image:'../image.png'},
    { id: 2, name: 'Não confie em ninguem', price: 20.5, description: 'Rafael Montes', image:'../imag1.jpg'},
    { id: 3, name: 'Um de nos esta mentindo', price: 90.0, description: 'Rafael Montes', image:'../imag2.jpg'},
    { id: 1, name: 'E assim que acaba', price: 45.0, description: 'Robert Stevenson', image:'../image.png'},
    { id: 2, name: 'Não confie em ninguem', price: 20.5, description: 'Rafael Montes', image:'../imag1.jpg'},
    { id: 3, name: 'Um de nos esta mentindo', price: 90.0, description: 'Rafael Montes', image:'../imag2.jpg'},
    { id: 1, name: 'E assim que acaba', price: 45.0, description: 'Robert Stevenson', image:'../image.png'},
    { id: 2, name: 'Não confie em ninguem', price: 20.5, description: 'Rafael Montes', image:'../imag1.jpg'},
    { id: 3, name: 'Um de nos esta mentindo', price: 90.0, description: 'Rafael Montes', image:'../imag2.jpg'},
    { id: 1, name: 'E assim que acaba', price: 45.0, description: 'Robert Stevenson', image:'../image.png'},
    { id: 2, name: 'Não confie em ninguem', price: 20.5, description: 'Rafael Montes', image:'../imag1.jpg'},
    { id: 3, name: 'Um de nos esta mentindo', price: 90.0, description: 'Rafael Montes', image:'../imag2.jpg'},
  ];

  getProducts(): Iproducts[]{
    return this.products;
  }
}
