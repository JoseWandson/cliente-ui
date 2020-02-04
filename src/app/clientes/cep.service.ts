import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CepService {

    url: string;

    constructor(private http: HttpClient) {
        this.url = 'https://viacep.com.br/ws';
    }

    buscar(cep: string): Promise<any> {
        return this.http.get<any>(`${this.url}/${cep}/json`)
            .toPromise()
            .then(response => {
                return response;
            });
    }
}
