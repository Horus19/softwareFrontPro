import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicacion } from '../models/publicacion.model';
import { MunicipioService } from '../services/municipio.service';
import { PublicacionService } from '../services/publicacion.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss']
})
export class PublicacionesComponent implements OnInit {

  publicaciones : Publicacion[] =[];
  constructor(
    private publicacionesService : PublicacionService,
    private router: Router, 
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.publicacionesService.getPublicaciones().subscribe(res => {
      this.publicaciones = res;
      console.log(res);
    })
  }

  detalle(id: number){
    console.log(id);
    this.router.navigate([`/publicaciones/publicacion/${id}`]);
  }

}
