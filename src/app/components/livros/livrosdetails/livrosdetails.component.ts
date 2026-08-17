import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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

  save() {
    alert('Salvo com sucesso');
  }
}