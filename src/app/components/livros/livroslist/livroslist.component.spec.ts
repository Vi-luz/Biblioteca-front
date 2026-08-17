import {Component } from '@angular/core';
import { LivroModel } from '../../../models/livro-model';

@Component({
  selector: 'app-livroslist',
  standalone: true,
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {

  lista: LivroModel[] = [
    { id: 1, titulo: 'Livro 1', autor: 'Autor 1', editora: 'Editora 1' },
    { id: 2, titulo: 'Livro 2', autor: 'Autor 2', editora: 'Editora 2' },
    { id: 3, titulo: 'Livro 3', autor: 'Autor 3', editora: 'Editora 3' }
  ];
  constructor() {

    let livro1 = new LivroModel(1, 'Livro 1', 'Autor 1', 'Editora 1');
    livro1.id = 1;
    livro1.titulo = 'Livro 1';
    livro1.autor = 'Autor 1';
    livro1.editora = 'Editora 1';

    let livro2 = new LivroModel(1, 'Livro 1', 'Autor 1', 'Editora 1');
    livro1.id = 2;
    livro1.titulo = 'Livro 2';
    livro1.autor = 'Autor 2';
    livro1.editora = 'Editora ';

    let livro3 = new LivroModel(1, 'Livro 1', 'Autor 1', 'Editora 1');
    livro1.id = 3;
    livro1.titulo = 'Livro 3';
    livro1.autor = 'Autor 3';
    livro1.editora = 'Editora 3';

    let livro4 = new LivroModel(1, 'Livro 1', 'Autor 1', 'Editora 1');
    livro1.id = 4;
    livro1.titulo = 'Livro 4';
    livro1.autor = 'Autor 4';
    livro1.editora = 'Editora 4';

    this.lista.push(livro1);
    this.lista.push(livro2);
    this.lista.push(livro3);
    this.lista.push(livro4);

  }
}