import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';

import { UsuarioComponent } from './usuario.component';
import { SharedModule } from '../shared/shared.module';
import { UsuarioRoutingModule } from './usuario-routing.module';

@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,

    InputTextModule,
    ButtonModule,
    PasswordModule,

    SharedModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
