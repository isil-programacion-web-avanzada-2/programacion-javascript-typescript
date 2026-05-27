import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface CursosModel {
  _id: string;
  curso: string;
  docente: string;
  categoria: string;
  inscritos: string;
  precio: string;
  estado: string;
}

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private http = inject(HttpClient);

  getCurso(): Observable<CursosModel[]> {
    return this.http.get<CursosModel[]>('http://localhost:3000/api/cursos');
  }
}
