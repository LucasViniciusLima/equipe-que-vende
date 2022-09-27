import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/login/user.entity';
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

  constructor(private readonly usersService: UsersService) { }

  ngOnInit(): void {
    this.user = {
      ...this.usersService.user
    };
  }

}
