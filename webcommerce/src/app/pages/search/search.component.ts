import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public _prodService: ProductosService
  ) {}

  //TODO: activate route para que funcione el router, es decir
  //  la navegacion entre componentes

  ngOnInit(): void {
    this.route.params.subscribe((resp) => {
      // console.log(resp['termino']);
      this._prodService.buscarProducto(resp['termino']);
    });
  }
}
