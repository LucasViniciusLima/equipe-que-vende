import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalesService } from 'src/app/shared/services/sales.service';
import { Sale } from '../sale.entity';


@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  sales: Sale[] = [];
  
  constructor(private readonly salesService: SalesService, private router: Router, private route: ActivatedRoute) {
    let id = this.route.snapshot.paramMap.get('checkout_id');    

    if (id != null) {
      this.salesService.getUserSales(id).subscribe(sales => {
        this.sales = sales;
      });
    }
  }

  ngOnInit(): void {
  }

}
