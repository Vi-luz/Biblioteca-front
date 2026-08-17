import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { LivroModel } from '../../../models/livro-model';

@Component({
  selector: 'app-livrosdetails',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './livrosdetails.component.html',
  styleUrl: './livrosdetails.component.scss'
})
export class LivrosdetailsComponent {
  public livro: LivroModel = new LivroModel(0, "", "", "", "");


  router = inject(ActivatedRoute);
  router2 = inject(Router);

  constructor(){
    let id = this.router.snapshot.params['id'];
    if (id > 0) {
      this.findById(id);
    }

  }
  findById(id: number) {
    let livroRetornado = this.router.snapshot.params['id'];
    this.livro = livroRetornado;
  }

  save() {
    if (this.livro.id > 0) {
      alert('Editado com sucesso');
    this.router2.navigate(['admin/livros'],{state:{livroEditado : this.livro}});
    } else {
    alert('Salvo com sucesso');
    this.router2.navigate(['admin/livros'],{state:{livroNovo : this.livro}});
    }
  }
}