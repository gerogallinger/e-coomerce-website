import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  producto: ProductoDescripcion;
  id: string;
  constructor(
    private route: ActivatedRoute,
    public _productoService: ProductosService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((parametros) => {
      this._productoService
        .getProducto(parametros['id'])
        .subscribe((prod: any) => {
          this.id = parametros['id'];

          this.producto = prod;
        });
    });
  }
}
