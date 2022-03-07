import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Municipio } from '../models/municipio.model';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getMunicipios(): Observable<Municipio[]> {
    return this.http.get<Municipio[]>(`${environment.urlBack}municipios`);
  }

  create(municipio: Municipio) : Observable<Municipio> {
    return this.http.post<Municipio>(`${environment.urlBack}municipios`, municipio, {headers: this.httpHeaders})
  }

  getMunicipio(id: number): Observable<Municipio>{
    return this.http.get<Municipio>(`${environment.urlBack}municipios/${id}`)
  }

  update(Municipio: Municipio): Observable<Municipio>{
    return this.http.put<Municipio>(`${environment.urlBack}municipios/${Municipio.id}`, Municipio, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Municipio>{
    return this.http.delete<Municipio>(`${environment.urlBack}municipios/${id}`, {headers: this.httpHeaders})
  }
}

