import { Component, OnInit } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';

import { Cliente } from 'src/app/core/model';
import { ClienteService } from '../cliente.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-cliente-listagem',
  templateUrl: './cliente-listagem.component.html'
})
export class ClienteListagemComponent implements OnInit {

  clientes: Array<Cliente>;

  constructor(
    private confirmation: ConfirmationService,
    private clienteService: ClienteService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.clienteService.listar()
      .then(response => this.clientes = response)
      .catch(erro => this.errorHandler.handle(erro));
  }

  confirmarExclusao(id: number) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(id);
      }
    });
  }

  excluir(id: number) {
    this.clienteService.excluir(id)
      .then(() => {
        this.listar();
        this.messageService.add({ severity: 'success', detail: 'Cliente excluído com sucesso!' });
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
