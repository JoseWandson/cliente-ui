import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../core/model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}/clientes`;
  }

  listar(): Promise<Cliente[]> {
    return this.http.get<Cliente[]>(this.url)
    .toPromise()
    .then(response => {
      return response;
    });
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.url}/${id}`)
      .toPromise()
      .then(() => null);
  }

  atualizar(cliente: Cliente): Promise<void> {
    return this.http.put<void>(`${this.url}/${cliente.id}`, cliente)
      .toPromise()
      .then(() => null);
  }

  adicionar(cliente: Cliente): Promise<void> {
    return this.http.post<void>(this.url, cliente)
      .toPromise()
      .then(() => null);
  }

  buscar(id: number): Promise<Cliente> {
    return this.http.get<Cliente>(`${this.url}/${id}`)
      .toPromise()
      .then(response => {
        return response;
      });
  }
}
