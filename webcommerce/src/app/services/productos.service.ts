import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  cargandoProductos = true;
  productos: Producto[] = [];
  productoFiltrado: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    //peticion a firebase con los datos de los productos

    return new Promise((resolve, reject) => {
      this.http
        .get(
          'https://web-site-angular-default-rtdb.firebaseio.com/productos_idx.json'
        )
        .subscribe((resp: any) => {
          this.productos = resp;
          this.cargandoProductos = false;
        });
      resolve;
    });
  }

  getProducto(id: string) {
    return this.http.get(
      `https://web-site-angular-default-rtdb.firebaseio.com/productos/${id}.json`
    );
  }

  buscarProducto(termino: string) {
    if (this.productos.length === 0) {
      //cargamos los productos si no estan cargados todavia
      this.cargarProductos().then(() => {
        //ejecutar despues de tener los productos
        //aplicar filtros
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string) {
    console.log(this.productos);

    this.productoFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach((prod) => {
      var titLow = prod.titulo.toLocaleLowerCase();
      if (
        prod.categoria.indexOf(termino) >= 0 ||
        titLow.indexOf(termino) >= 0
      ) {
        this.productoFiltrado.push(prod);
      }
    });
  }
}
