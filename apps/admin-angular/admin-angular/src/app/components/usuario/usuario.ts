import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-usuario',
  imports: [AsyncPipe],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {
  private http = inject(HttpClient);

  users = this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
}
