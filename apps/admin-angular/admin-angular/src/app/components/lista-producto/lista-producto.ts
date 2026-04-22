import { Component, inject } from '@angular/core';
import { Producto, ProductoService } from '../../services/producto';

@Component({
  selector: 'app-lista-producto',
  imports: [],
  templateUrl: './lista-producto.html',
  styleUrl: './lista-producto.css',
})
export class ListaProducto {
  productos: Producto[] = [];
  private productoService = inject(ProductoService);

  ngOnInit(): void {
    this.productos = this.productoService.getProductos();
  }
}
