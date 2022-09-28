import { Component } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'equipe-que-vende';

  constructor(private loginService: LoginService) { }

  showNavbar() {
    return (this.loginService.isAuthenticated());
  }

}
