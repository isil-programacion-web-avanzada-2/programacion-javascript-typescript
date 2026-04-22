import { Injectable } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  getProductos(): Producto[] {
    return [
      { id: 1, nombre: 'Laptop' },
      { id: 2, nombre: 'Mouse' },
      { id: 3, nombre: 'Teclado' }
    ];
  }
}
