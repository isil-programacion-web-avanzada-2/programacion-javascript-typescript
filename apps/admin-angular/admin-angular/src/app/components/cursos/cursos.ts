import { Component, inject, OnInit, signal } from '@angular/core';
import { CursosModel, CursosService } from '../../services/cursos';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css',
})
export class Cursos implements OnInit {
  cursos = signal<CursosModel[]>([]);

  private cursoService = inject(CursosService);

  ngOnInit(): void {
    this.cursoService.getCurso().subscribe({
      next: (data) => {
        console.log('Cursos recibidos:', data);
        this.cursos.set(data);
      },
      error: (error) => {
        console.error('Error al obtener cursos:', error);
      }
    });
  }
}
