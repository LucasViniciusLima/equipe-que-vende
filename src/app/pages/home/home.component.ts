import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  salesLink: string = 'https://clkdmg.site/checkout/movimentotransformacional385831';
  salesSiteLink: string = 'https://www.romanni.com.br/movimento-transformacional/plataform';

  textGuruCopy: boolean = false;
  textSalesSiteCopy: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  
  copyLinkGuru() {
    navigator.clipboard.writeText(this.salesLink);

    this.textGuruCopy = true;
    this.textSalesSiteCopy = false;
  }

  copyLinkSalesPage() {
    navigator.clipboard.writeText(this.salesSiteLink);

    this.textSalesSiteCopy = true;
    this.textGuruCopy = false;
  }
}
