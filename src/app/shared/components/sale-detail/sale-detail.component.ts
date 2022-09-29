import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.css']
})
export class SaleDetailComponent implements OnInit {

  sale: any;
  user: any;
  navState: any;

  constructor(private route: Router, private userService: UsersService) {
    this.navState = this.route.getCurrentNavigation()?.extras?.state; 

    if (this.navState != null) {
      this.sale = this.navState;

      this.userService.getUserByCheckoutId(this.sale?.source?.checkout_id).subscribe(user => {
        this.user = user;
      });
    }
  }

  ngOnInit(): void {
  }

}
