import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.css']
})
export class SaleDetailComponent implements OnInit {

  sale: any;

  constructor(private route: Router) {
    const navState = this.route.getCurrentNavigation()?.extras?.state;

    if (navState != null) {
      this.sale = navState;
    }
  }

  ngOnInit(): void {
  }


}
