import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';
import { User } from '../../user.entity';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nome: string = '';
  email: string = '';
  senha: string = '';
  checkout_id: string = '';
  senhaConfirmar: string = '';
  contaExistente: boolean = false;
  emailErrado: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  async criarConta() {
    if (this.campoEstaPreenchido() && this.senhasIguais() && this.emailIsValid()) {
      let user: User;

      user = {
        checkout_id: this.checkout_id,
        name: this.nome,
        email: this.email,
        password: this.senha
      };

      await this.loginService.createNewUser(user).subscribe(response => {
        this.router.navigateByUrl('/home');
      })
    }
  }


  campoEstaPreenchido(): boolean {
    if (this.email != '' && this.senha != '' && this.senhaConfirmar != '' && this.nome != '' && this.checkout_id != '') return true;
    return false;
  }

  setContaExistente() {
    this.contaExistente = true;
  }

  senhasIguais() {
    if (this.senha == this.senhaConfirmar) return true;

    else return false;
  }

  emailIsValid() {
    var re = /\S+@\S+\.\S+/;
    this.emailErrado = !re.test(this.email);
    return re.test(this.email);
  }

}
