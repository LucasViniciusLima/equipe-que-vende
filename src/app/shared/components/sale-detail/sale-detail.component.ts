import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private route: Router, private userService: UsersService, private activRoute: ActivatedRoute) {
    this.navState = this.route.getCurrentNavigation()?.extras?.state;

    this.sale = this.actSale();

    this.userService.getUserByCheckoutId(this.sale?.source?.checkout_id).subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit(): void {
  }

  actSale(): any {
    if (this.navState != null) {
      let _id = this.activRoute.snapshot.paramMap.get('sale_id');
      return this.navState.filter((sales: any) => sales._id === _id)[0];
    }
    return null;
  }

}
