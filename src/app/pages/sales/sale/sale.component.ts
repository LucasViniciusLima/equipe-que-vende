import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesService } from 'src/app/shared/services/sales.service';
import { Sale } from '../sale.entity';


@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  sales: Sale[] = [];
  
  constructor(private readonly salesService: SalesService, private router: Router) {
    let currentNav = this.router.getCurrentNavigation()?.extras?.state;        

    if (currentNav != null) {
      this.salesService.getUserSales(currentNav['user']?.checkout_id).subscribe(sales => {
        this.sales = sales;
      });
    }
  }

  ngOnInit(): void {
  }

}
