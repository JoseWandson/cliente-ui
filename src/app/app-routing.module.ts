import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';

const routes: Routes = [
  { path: 'clientes', loadChildren: './clientes/cliente.module#ClienteModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'usuario', loadChildren: './usuario/usuario.module#UsuarioModule' },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
