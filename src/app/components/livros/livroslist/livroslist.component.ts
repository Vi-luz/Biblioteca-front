import {Component } from '@angular/core';
import { LivroModel } from '../../../models/livro-model';
import { CommonModule } from '@angular/common';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';

@Component({
  selector: 'app-livroslist',
  standalone: true,
  imports: [CommonModule,MdbCollapseModule],
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {

  lista: LivroModel[] = [
  new LivroModel(1, 'Dom Casmurro', 'Machado de Assis', 'Editora Ática', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTekkRUyu7uOF8FEmpam0XG0AhQZLESlkb9Q57R_yfIUg&s'),
  new LivroModel(2, '1984', 'George Orwell', 'Companhia das Letras', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJmuJqAPa3P4-vVoK0IdEskS5VrNEPVgFdtHJ5zHO_Q&s'),
  new LivroModel(3, 'O Alquimista', 'Paulo Coelho', 'Editora Rocco', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQior_qNSFeOH6WAo8Q0_yjti1MERzd1yY50siDOwYwgw&s'),
  new LivroModel(4, 'Cem Anos de Solidão', 'Gabriel García Márquez', 'Editora Record', 'https://placehold.co/45x45/dc3545/white?text=Chttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTgBdo5gSmw-aAVRZ-IbrffCTF4zS2NcbgifyuKZxoQ&s=10A')
  ];

  }