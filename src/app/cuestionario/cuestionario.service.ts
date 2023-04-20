import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import {HttpClient, HttpHeaders} from "@angular/common/http";
import { DetalleCuestionario } from './detallecuestionario';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {

  private url = 'http://localhost:8080/api/listar-detallecuestionario/1';
  private urlEndPointList: string = 'http://localhost:8080/api/listar-detallecuestionario/2';


private urlEndPointListUpdate: string = 'http://localhost:8080/api/detallecuestionario-update';
  private urlEndPointListAll: string = 'http://localhost:8080/api/listar-detallecuestionarios';

  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http: HttpClient) { }

  getDetalleCuestionarios(): Observable<DetalleCuestionario[]> {
    return this.http.get<DetalleCuestionario[]>(this.urlEndPointListAll);
  }

  updateDetalleCuestionario(detalleCuestionarioActualizado: DetalleCuestionario, respuestaSeleccionada: Number):Observable<DetalleCuestionario>{
    return this.http.put<DetalleCuestionario>(`${this.urlEndPointListUpdate}/${detalleCuestionarioActualizado.id}/${respuestaSeleccionada}`, detalleCuestionarioActualizado, {headers: this.httpHeaders});
  }


  // NO FUNCA 
  getDetalleCuestionario(): Observable<DetalleCuestionario> {
    return this.http.get<DetalleCuestionario>(this.urlEndPointList);
    // return this.http.get<DetalleCuestionario>(`${this.urlEndPointList}/${id}`);
  }

}
