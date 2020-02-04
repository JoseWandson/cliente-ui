import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {

  constructor(
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) { }

  login(usuario: string, senha: string) {
    this.auth.login(usuario, senha)
      .then(() => {
        this.router.navigate(['/dashboard']);
      })
      .catch(erro => {
        this.errorHandler.handle(erro);
      });
  }

  loginFacebook() {
    this.auth.loginFacebook()
      .then(() => {
        this.router.navigate(['/dashboard']);
      })
      .catch(erro => {
        this.errorHandler.handle(erro);
      });
  }

}
