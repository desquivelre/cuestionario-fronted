import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlEndPointListAllUsuarios: string = 'http://localhost:8080/api/listar-usuarios';

  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.urlEndPointListAllUsuarios);
  }

}
