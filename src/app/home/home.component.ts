import { Component, OnInit } from '@angular/core';
import { Municipio } from '../models/municipio.model';
import { UsuarioService } from '../services/usuario.service';
import swal from 'sweetalert2'
import { MunicipioService } from '../services/municipio.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  municipios: Municipio[] | undefined;
  constructor(private usuarioService: UsuarioService, private municipioService: MunicipioService ) { }

  ngOnInit(): void {
    this.municipioService.getMunicipios().subscribe(municipios => {
      this.municipios = municipios;
      console.log(municipios);
      swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
    })
  }

  delete(Municipio: Municipio): void {
    swal.fire(
      'Está seguro?',
      `¿Seguro que desea eliminar al Municipio ${Municipio.nombre}?`,
      'warning',
      
    ).then((result) => {
      if (result.value) {

        this.municipioService.delete(Municipio.id).subscribe(
          response => {
            this.municipios = this.municipios?.filter(cli => cli !== Municipio)
            swal.fire(
              'Municipio Eliminado!',
              `Municipio ${Municipio.nombre} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }


}
