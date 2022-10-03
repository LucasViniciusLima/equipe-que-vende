import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/shared/services/sales.service';
import { Sale } from '../sale.entity';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  sales: Sale[] = [];

  constructor(private salesService: SalesService) {
    this.salesService.getAllSales().subscribe(sales => {
      this.sales = sales;
    });
  }

  ngOnInit(): void {
  }

}
