import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { UsuarioService } from './usuario.service';
import { ErrorHandlerService } from '../core/error-handler.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private messageService: MessageService,
    private router: Router,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, Validators.required],
      senha: [null, Validators.required]
    });
  }

  salvar() {
    this.usuarioService.adicionar(this.formulario.value)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Usuário adicionado com sucesso!' });
        this.router.navigate(['/login']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
