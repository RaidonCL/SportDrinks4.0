import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITiendas } from '../interfaces/itiendas';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ITienda } from '../interfaces/itienda';

@Injectable({
  providedIn: 'root'
})
export class StiendasService {

  constructor(private http: HttpClient) { }

  listarTiendas(): Observable<ITiendas> {
    return this.http.get<ITiendas>(`${environment.apiURL}/Tiendas`)

  }

  crearTienda(newTienda:ITienda): Observable<ITienda>{
    return this.http.post<ITienda>(`${environment.apiURL}/Tiendas`, newTienda)

  }
}
