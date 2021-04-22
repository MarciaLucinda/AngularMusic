import { Injectable } from '@angular/core';
import {Personas} from './usuarios/usuarios.module';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {environment} from './../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  baseUrl = environment.baseUrl;
  key = environment.baseKey;
  info:any={};
  constructor(private http: HttpClient) {


   }


  
   getMusic2(): Observable<any>{
    return this.http.get<Personas>("../../assets/datos/datos.json")
  }





}
