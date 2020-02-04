import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AgmCoreModule } from '@agm/core';

import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { SharedModule } from '../shared/shared.module';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteListagemComponent } from './cliente-listagem/cliente-listagem.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    ClienteCadastroComponent,
    ClienteListagemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    InputMaskModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,

    AgmCoreModule.forRoot({
      apiKey: `${environment.apiKeyMaps}`
    }),

    SharedModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
