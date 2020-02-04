import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { GrowlModule } from 'primeng/growl';
import { MessageService } from 'primeng/components/common/messageservice';
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

    GrowlModule,
    ConfirmDialogModule
  ],
  exports: [
    NavbarComponent,

    GrowlModule,
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
