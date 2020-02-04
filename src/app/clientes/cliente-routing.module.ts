import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { ClienteListagemComponent } from './cliente-listagem/cliente-listagem.component';
import { AuthGuard } from '../seguranca/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ClienteListagemComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'novo',
    component: ClienteCadastroComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component: ClienteCadastroComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
