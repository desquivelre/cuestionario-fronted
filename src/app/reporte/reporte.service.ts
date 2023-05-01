import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import {catchError, retry} from "rxjs/operators";

import {HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { DetalleCuestionario } from './detallecuestionario';


@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  private urlEndPointListDetalleCuestionarioAll: string = 'http://localhost:8080/api/listar-detallecuestionarios';
  
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

  getDetalleCuestionarios2(ccuestionario:Number, cusuario:Number): Observable<DetalleCuestionario[]> {
    return this.http.get<DetalleCuestionario[]>(`${this.urlEndPointListDetalleCuestionarioAll}/${ccuestionario}/${cusuario}`, this.httpOptions).pipe(retry(2),catchError(this.handleError));
    // return this.http.get<DetalleCuestionario[]>("http://localhost:8080/api/listar-detallecuestionarios/1/2", this.httpOptions).pipe(retry(2),catchError(this.handleError));
  }
  // getDetalleCuestionarios2(ccuestionario:Number, cusuario:Number){
  //   const url = `http://localhost:8080/api/listar-detallecuestionarios/${ccuestionario}/${cusuario}`;
  //   return this.http.get(url);
  // }

}
