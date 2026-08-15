import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LivroslistComponent } from './components/livroslist/livroslist.component';

export const routes: Routes = [
    [path: "livros", Component: LivroslistComponent]
];
