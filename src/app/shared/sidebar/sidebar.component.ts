import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent{

  constructor( private gifsService: GifsService ) { }

  get historial() {
    return this.gifsService.historial;
  }

  buscar(termino: string){
    this.gifsService.buscarGifs(termino);
  }

  borrarHistorial() {
    this.gifsService.borrarBusqueda();
  }

}
