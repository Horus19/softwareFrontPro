import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicacion } from 'src/app/models/publicacion.model';
import { MunicipioService } from 'src/app/services/municipio.service';
import { PublicacionService } from 'src/app/services/publicacion.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss']
})
export class PublicacionesComponent implements OnInit {
  publicaciones: Publicacion[] =[];
  constructor(
    private municipioService: MunicipioService, 
    private fb: FormBuilder,  
    private router: Router, 
    private route: ActivatedRoute,
    private publicacionService: PublicacionService 
  ) { }

  ngOnInit(): void {
    this.publicacionService.getPublicacionesPorUsuario(1).subscribe(res => {
      this.publicaciones = res;
    })
  }

  delete(publicacion: Publicacion){
    swal.fire(
      'Está seguro?',
      `¿Seguro que desea eliminar al Municipio ${publicacion.titulo}?`,
      'warning',
      
    ).then((result) => {
      if (result.value) {

        this.publicacionService.delete(publicacion.id).subscribe(
          response => {
            this.publicaciones = this.publicaciones?.filter(cli => cli !== publicacion)
            swal.fire(
              'Publicacion Eliminada!',
              `Publicacion ${publicacion.titulo} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }

  editar(id: number){
    console.log(id);
    this.router.navigate([`/general/editar/${id}`]);
  }

}
