import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public _infoPageService: InfoPaginaService,
    private router: Router
  ) {}

  //TODO: router te permite hacer la navegacion interna entre componentes
  ngOnInit(): void {}

  buscarProducto(termino: string) {
    if (termino.length < 2) {
      return;
    }
    this.router.navigate(['/search', termino]);
  }
}
