import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MapsService {

    url: string;

    constructor(private http: HttpClient) {
        this.url = `https://maps.googleapis.com/maps/api/geocode/json?key=${environment.apiKeyMaps}&sensor=false&address=`;
    }

    converterEnderecoEmCoordenadas(endereco: string): Promise<any> {
        return this.http.get<any>(`${this.url}${endereco}`)
            .toPromise()
            .then(response => response.results[0].geometry.location);
    }
}
