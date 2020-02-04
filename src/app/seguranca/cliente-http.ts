import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { Observable, from as observableFromPromise } from 'rxjs';

import { AuthService } from './auth.service';

export class NotAuthenticatedError { }

@Injectable()
export class ClienteHttp extends HttpClient {

    constructor(
        private httpHandler: HttpHandler,
        private auth: AuthService
    ) {
        super(httpHandler);
    }

    public delete<T>(url: string, options?: any): Observable<T> {
        return this.fazerRequisicao<T>(() => super.delete<T>(url, options));
    }

    private fazerRequisicao<T>(fn: Function): Observable<T> {
        if (this.auth.isAccessTokenInvalido()) {
            console.log('Requisição HTTP com access token inválido. Obtendo novo token...');

            const chamadaNovoAccessToken = this.auth.obterNovoAccessToken()
                .then(() => {
                    if (this.auth.isAccessTokenInvalido()) {
                        throw new NotAuthenticatedError();
                    }

                    return fn().toPromise();
                });

            return observableFromPromise(chamadaNovoAccessToken);
        } else {
            return fn();
        }
    }


}