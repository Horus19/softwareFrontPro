import { Component, Input, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/models/publicacion.model';

@Component({
  selector: 'app-publicacion-tarjeta',
  templateUrl: './publicacion-tarjeta.component.html',
  styleUrls: ['./publicacion-tarjeta.component.scss']
})
export class PublicacionTarjetaComponent implements OnInit {

  @Input() publicacion!: Publicacion;

  constructor() { }

  ngOnInit(): void {
    console.log(this.publicacion);
  }

}
