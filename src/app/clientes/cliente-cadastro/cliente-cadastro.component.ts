import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { ClienteService } from '../cliente.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { CepService } from '../cep.service';
import { MapsService } from '../maps.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {

  formulario: FormGroup;
  lat: number;
  lng: number;
  zoom: number = 15;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private clienteService: ClienteService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private cepService: CepService,
    private mapsService: MapsService
  ) { }

  ngOnInit() {
    this.configurarFormulario();

    const idCliente = this.route.snapshot.params['id'];
    if (idCliente) {
      this.carregarCliente(idCliente);
    }
  }

  salvar() {
    if (this.editando) {
      this.atualizarCliente();
    } else {
      this.adicionarCliente();
    }
  }

  get editando() {
    return Boolean(this.formulario.get('id').value);
  }

  atualizarCliente() {
    this.clienteService.atualizar(this.formulario.value)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Cliente alterado com sucesso!' });
        this.router.navigate(['/clientes']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  adicionarCliente() {
    this.clienteService.adicionar(this.formulario.value)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Cliente adicionado com sucesso!' });
        this.router.navigate(['/clientes']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [],
      nome: [null, Validators.required],
      telefone: [null, Validators.required],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        logradouro: [null, Validators.required],
        numero: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
        pais: ['Brasil', Validators.required]
      })
    });
  }

  carregarCliente(id: number) {
    this.clienteService.buscar(id)
      .then(cliente => this.formulario.patchValue(cliente))
      .catch(erro => this.errorHandler.handle(erro));
  }

  novo() {
    this.formulario.reset();
    this.router.navigate(['/clientes/novo']);
  }

  carregarEndereco() {
    if (this.formulario.get('endereco.cep').value && this.formulario.get('endereco.cep').value.length === 9) {
      this.cepService.buscar(this.formulario.get('endereco.cep').value)
        .then(endereco => {
          this.formulario.get('endereco').patchValue({
            logradouro: endereco.logradouro,
            cidade: endereco.localidade,
            estado: endereco.uf
          })
        })
        .catch(erro => this.errorHandler.handle(erro));
      this.converterEnderecoEmCoordenadas();
    }
  }

  converterEnderecoEmCoordenadas() {
    this.mapsService.converterEnderecoEmCoordenadas(this.formulario.get('endereco.cep').value)
      .then(coordenada => {
        this.lat = coordenada.lat;
        this.lng = coordenada.lng
      })
      .catch(erro => this.errorHandler.handle(erro));;
  }

}
