import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos: any[];

  constructor() {
    const prod1 = {
      nombre: 'Pan',
      descripcion: 'Pan de masa madre hecho artesanalmente.',
      comprado: true
    };
    const prod2 = {
      nombre: 'Pescado',
      descripcion: 'Pescado procedente de mares gallegos. Disponible en diferentes variedades.',
      comprado: false
    };
    const prod3 = {
      nombre: 'Carne',
      descripcion: 'Carne de cerdo, vaca...',
      comprado: false
    };
    const prod4 = {
      nombre: 'Huevos',
      descripcion: 'Huevos de gallinas camperas.',
      comprado: true
    };
    const prod5 = {
      nombre: 'Pasta',
      descripcion: 'Pasta de verduras italiana.',
      comprado: false
    };
    const prod6 = {
      nombre: 'Leche',
      descripcion: 'Leche de vaca, procedente de Galicia.',
      comprado: false
    };
    this.productos = [];
    this.productos.push(prod1);
    this.productos.push(prod2);
    this.productos.push(prod3);
    this.productos.push(prod4);
    this.productos.push(prod5);
    this.productos.push(prod6);
  }

  ngOnInit() {
  }

}
