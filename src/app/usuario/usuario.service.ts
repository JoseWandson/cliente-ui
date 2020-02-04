import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Usuario } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}/usuarios`;
  }

  adicionar(usuario: Usuario): Promise<void> {
    return this.http.post<void>(this.url, usuario)
      .toPromise()
      .then(() => null);
  }
}
