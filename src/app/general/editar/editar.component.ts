import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Municipio } from 'src/app/models/municipio.model';
import { Publicacion } from 'src/app/models/publicacion.model';
import { PublicacionDTO } from 'src/app/models/publicacionDTO.model';
import { MunicipioService } from 'src/app/services/municipio.service';
import { PublicacionService } from 'src/app/services/publicacion.service';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  publicacion! : Publicacion;
  municipios: Municipio[] = [];
  publicacionDTO! : PublicacionDTO;
  idPublicacion!: number;
  form!: FormGroup;
  constructor(
    private municipioService: MunicipioService, 
    private fb: FormBuilder,  
    private router: Router, 
    private route: ActivatedRoute,
    private publicacionService: PublicacionService 
    ) { }

  ngOnInit(): void {
    this.municipioService.getMunicipios().subscribe(rest  => this.municipios = rest);
    this.form = this.fb.group({
      titulo: [],
      description: [],
      municipio: [],
    })
    this.route.params.subscribe(res => {
      this.idPublicacion = res['id'];
      this.publicacionService.getPublicacionById(res['id']).subscribe(res => {
        this.publicacion = res;
        this.form.controls['titulo'].setValue(this.publicacion.titulo);
        this.form.controls['description'].setValue(this.publicacion.descripcion);
        this.form.controls['municipio'].setValue(this.publicacion.id_municipio);
      });
    })
  }

  crear (){
    this.publicacionService.update(this.idPublicacion,this.form.value.titulo, this.form.value.municipio, this.form.value.description).subscribe(res => {
      console.log(res);
      this.router.navigate([`/general`]);
    })
  
  }
}
