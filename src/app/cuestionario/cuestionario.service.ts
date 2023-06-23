import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import {catchError, retry} from "rxjs/operators";

import {HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { DetalleCuestionario } from './detallecuestionario';
import { Pregunta } from './pregunta';
import { DetalleCuestionario2 } from './detallecuestionario2';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {
  
  private url = 'https://springgcp-386623.rj.r.appspot.com/api/listar-detallecuestionario/1';
  private urlEndPointList: string = 'https://springgcp-386623.rj.r.appspot.com/api/listar-detallecuestionario/2';


  private urlEndPointUpdateDetalleCuestionario: string = 'https://springgcp-386623.rj.r.appspot.com/api/detallecuestionario-update';
  private urlEndPointCreateDetalleCuestionario: string = 'https://springgcp-386623.rj.r.appspot.com/api/detallecuestionario-save';
  private urlEndPointListAll: string = 'https://springgcp-386623.rj.r.appspot.com/api/listar-detallecuestionarios';
  

  private urlEndPointListPreguntas: string = 'https://springgcp-386623.rj.r.appspot.com/api/listar-preguntas';
  private urlEndPointListDetalleCuestionarioAll: string = 'https://springgcp-386623.rj.r.appspot.com/api/listar-detallecuestionarios';

  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  private httpOptions =  {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${error.error.message} `);
    }
    else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
  
    return throwError('Something happened with request, please try again later');
  }

  getDetalleCuestionarios(): Observable<DetalleCuestionario[]> {
    return this.http.get<DetalleCuestionario[]>(this.urlEndPointListAll);
  }

  getPreguntas(): Observable<Pregunta[]> {
    return this.http.get<Pregunta[]>(this.urlEndPointListPreguntas);
  }

  updateDetalleCuestionario(id: Number, respuestaSeleccionada: Number):Observable<DetalleCuestionario2>{
    return this.http.put<DetalleCuestionario2>(`${this.urlEndPointUpdateDetalleCuestionario}/${id}/${respuestaSeleccionada}`, {headers: this.httpHeaders});
  }

  createDetalleCuestionario(usuarioSeleccionado: Number, cuestionarioSeleccionado: Number, preguntaSeleccionada, respuestaSeleccionada: Number):Observable<DetalleCuestionario>{
    return this.http.post<DetalleCuestionario>(`${this.urlEndPointCreateDetalleCuestionario}/${usuarioSeleccionado}/${cuestionarioSeleccionado}/${preguntaSeleccionada}/${respuestaSeleccionada}`, {headers: this.httpHeaders});
  }


  getDetalleCuestionarios2(ccuestionario:Number, cusuario:Number): Observable<DetalleCuestionario2[]> {
    return this.http.get<DetalleCuestionario2[]>(`${this.urlEndPointListDetalleCuestionarioAll}/${ccuestionario}/${cusuario}`, this.httpOptions).pipe(retry(2),catchError(this.handleError));
  }

  // NO FUNCA 
  getDetalleCuestionario(): Observable<DetalleCuestionario> {
    return this.http.get<DetalleCuestionario>(this.urlEndPointList);
  }

}
