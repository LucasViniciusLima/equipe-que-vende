import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';
import { User } from '../../user.entity';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginFailed: boolean = false;
  email: string = '';
  password: string = '';

  constructor(
    public loginService: LoginService,
    private router: Router,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
  }


  async fazerLogin() {
    if (!this.campoEstaPreenchido()) return;

    this.loginService.login({ email: this.email, password: this.password }).subscribe(response => {
      this.loginService.doLoginUser(this.email, response["access_token"]);

      this.userService.getUser(this.email).subscribe((response: User) => {
        this.userService.user = response;
      });

      this.router.navigate(['home']);
    });

    //this.setFailedLogin();
  }


  campoEstaPreenchido(): boolean {
    if (this.email != '' && this.password != '') {
      return true;
    }
    else {
      this.setFailedLogin();
      return false;
    }
  }

  setFailedLogin() {
    this.loginFailed = true;
  }

}
