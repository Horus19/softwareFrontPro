import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Publicacion } from '../models/publicacion.model';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) {}

  getPublicaciones():  Observable<Publicacion[]> {
    return this.http.get<Publicacion[]>(`${environment.urlBack}publicaciones`);
  }
  
  getPublicacionesPorUsuario(id: number): Observable<Publicacion[]> {
    return this.http.get<Publicacion[]>(`${environment.urlBack}publicacionesByUser/${id}`);
  }


  getPublicacionById(id : number) {
    return this.http.get<Publicacion>(`${environment.urlBack}publicaciones/${id}`);
  }

  updatePublicacion(idPublicacion: number, titulo: string, municipio: number, description: string) {

    let jsonBody = {
      "titulo": titulo,
      "descripcion": description,
      "id_user" : 1,
      "id_municipio" : municipio,
      "imagenList":[{
          "url":"https://cdn.baquianos.com/img/blog/2019/13/san-gil-i6yx640.jpg"
      }]
    }

    return this.http.put<Publicacion>(`${environment.urlBack}publicaciones`, jsonBody, {headers: this.httpHeaders})
  }

  delete(id : number){
    return this.http.delete(`${environment.urlBack}publicacionById/${id}`)
  }

  create( titulo: string, municipio: number, description: string){
    let jsonBody = 
      {
        "titulo": titulo,
        "descripcion": description,
        "id_user" : 1,
        "id_municipio" : municipio,
        "imagenList":[{
            "url":"www.photo.com"
        }]
      }
    
    return this.http.post(`${environment.urlBack}publicaciones`, jsonBody, {headers: this.httpHeaders})
  }

  update( idPublicacion: number , titulo: string, municipio: number, description: string){
    let jsonBody = 
      {
        "id" : idPublicacion,
        "titulo": titulo,
        "descripcion": description,
        "id_user" : 1,
        "id_municipio" : municipio,
        "imagenList":[{
            "url":"https://cdn.baquianos.com/img/blog/2019/13/san-gil-i6yx640.jpg"
        }]
      }
    
    return this.http.put(`${environment.urlBack}publicaciones`, jsonBody, {headers: this.httpHeaders})
  }

}
