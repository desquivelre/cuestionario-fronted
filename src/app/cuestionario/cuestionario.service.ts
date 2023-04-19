import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {HttpClient, HttpHeaders} from "@angular/common/http";
import { DetalleCuestionario } from './detallecuestionario';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {

  private url = 'http://localhost:8080/api/listar-detallecuestionario/1';

  private urlEndPointList: string = 'http://localhost:8080/api/listar-detallecuestionario';

  private urlEndPointListAll: string = 'http://localhost:8080/api/listar-detallecuestionarios';

  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http: HttpClient) { }

  getDetalleCuestionarios(): Observable<DetalleCuestionario[]> {
    return this.http.get<DetalleCuestionario[]>(this.urlEndPointListAll);
  }

  getDetalleCuestionario(id): Observable<DetalleCuestionario> {
    return this.http.get<DetalleCuestionario>(`${this.urlEndPointList}/${id}`);
  }

}
