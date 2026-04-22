import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProducto } from './components/lista-producto/lista-producto';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ListaProducto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  usuario = {
      nombre: "Wilder",
      items: [
        {id: 1, name: 'lavadora'},
        {id: 2, name: 'Laptop'}
      ]
  };
  esActivo = true;
  colorFavorito= 'blue';
  mensaje = 'Bienvenido querido profesor';
}
