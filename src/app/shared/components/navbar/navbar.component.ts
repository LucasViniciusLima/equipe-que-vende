import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { User } from 'src/app/login/user.entity';
import { SalesService } from '../../services/sales.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: any = {
    admin: false
  }

  constructor(private readonly usersService: UsersService, private readonly loginService: LoginService) { }

  ngOnInit(): void {
    this.usersService.getUser(this.loginService.emailUser()).subscribe(user => {
      this.user = {
        ...user
      };
    });
  }

}
