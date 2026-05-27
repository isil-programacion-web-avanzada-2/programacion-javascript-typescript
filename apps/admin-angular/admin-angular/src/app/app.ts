import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
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
