import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.http
      .get('assets/data/data-page.json')
      .subscribe((resp: InfoPagina) => {
        this.info = resp;
        // console.log(resp);
        this.cargada = true;
      });
  }

  private cargarEquipo() {
    //peticion a firebase con los datos del equipo

    this.http
      .get('https://web-site-angular-default-rtdb.firebaseio.com/equipo.json')
      .subscribe((resp: any) => {
        this.equipo = resp;
      });
  }
}
