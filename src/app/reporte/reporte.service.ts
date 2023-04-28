import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import {HttpClient, HttpHeaders} from "@angular/common/http";
import { DetalleCuestionario } from './detallecuestionario';


@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  private urlEndPointListDetalleCuestionarioAll: string = 'http://localhost:8080/api/listar-detallecuestionarios';
  
  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http: HttpClient) { }

  getDetalleCuestionarios2(ccuestionario:Number, cusuario:Number): Observable<DetalleCuestionario[]> {
    return this.http.get<DetalleCuestionario[]>(`${this.urlEndPointListDetalleCuestionarioAll}/${ccuestionario}/${cusuario}`);
  }

}
