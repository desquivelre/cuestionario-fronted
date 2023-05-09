import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import {HttpClient, HttpHeaders} from "@angular/common/http";
import { DetalleCuestionario } from './detallecuestionario';
import { Pregunta } from './pregunta';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {

  private url = 'http://localhost:8080/api/listar-detallecuestionario/1';
  private urlEndPointList: string = 'http://localhost:8080/api/listar-detallecuestionario/2';


  private urlEndPointUpdateDetalleCuestionario: string = 'http://localhost:8080/api/detallecuestionario-update';
  private urlEndPointCreateDetalleCuestionario: string = 'http://localhost:8080/api/detallecuestionario-save';
  private urlEndPointListAll: string = 'http://localhost:8080/api/listar-detallecuestionarios';

  private urlEndPointListPreguntas: string = 'http://localhost:8080/api/listar-preguntas';

  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http: HttpClient) { }

  getDetalleCuestionarios(): Observable<DetalleCuestionario[]> {
    return this.http.get<DetalleCuestionario[]>(this.urlEndPointListAll);
  }

  getPreguntas(): Observable<Pregunta[]> {
    return this.http.get<Pregunta[]>(this.urlEndPointListPreguntas);
  }

  updateDetalleCuestionario(id: Number, respuestaSeleccionada: Number):Observable<DetalleCuestionario>{
    return this.http.put<DetalleCuestionario>(`${this.urlEndPointUpdateDetalleCuestionario}/${id}/${respuestaSeleccionada}`, {headers: this.httpHeaders});
  }

  createDetalleCuestionario(usuarioSeleccionado: Number, cuestionarioSeleccionado: Number, preguntaSeleccionada, respuestaSeleccionada: Number):Observable<DetalleCuestionario>{
    return this.http.post<DetalleCuestionario>(`${this.urlEndPointCreateDetalleCuestionario}/${usuarioSeleccionado}/${cuestionarioSeleccionado}/${preguntaSeleccionada}/${respuestaSeleccionada}`, {headers: this.httpHeaders});
  }

  // NO FUNCA 
  getDetalleCuestionario(): Observable<DetalleCuestionario> {
    return this.http.get<DetalleCuestionario>(this.urlEndPointList);
  }

}
