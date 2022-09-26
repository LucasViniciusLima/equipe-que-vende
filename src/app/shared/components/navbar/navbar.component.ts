import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/login/user.entity';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: any = {
    admin: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
