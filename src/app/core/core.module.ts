import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { ClienteService } from '../clientes/cliente.service';
import { AuthService } from '../seguranca/auth.service';
import { ClienteHttp } from '../seguranca/cliente-http';
import { CepService } from '../clientes/cep.service';
import { MapsService } from '../clientes/maps.service';
import { UsuarioService } from '../usuario/usuario.service';

@NgModule({
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,

    ToastModule,
    ConfirmDialogModule
  ],
  exports: [
    NavbarComponent,

    ToastModule,
    ConfirmDialogModule
  ],
  providers: [
    MessageService,
    ConfirmationService,

    ErrorHandlerService,
    ClienteService,
    AuthService,
    ClienteHttp,
    CepService,
    MapsService,
    UsuarioService
  ]
})
export class CoreModule { }
