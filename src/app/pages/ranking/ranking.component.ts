import { Component, OnInit } from '@angular/core';
import { RankingService } from 'src/app/shared/services/ranking.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  rankList: Array<any> = [];

  constructor(private readonly rankingService: RankingService) { }

  ngOnInit(): void {
    this.rankingService.getActualMonthRanking().subscribe(rank => {
      this.rankList = rank;
      this.insertionSort();
    });
    
  }

  insertionSort() {
    for (let i = 1; i < this.rankList.length; i++) {

      let aux = this.rankList[i];
      let j = i;

      while ((j > 0) && (this.rankList[j - 1]?.salesCount < aux?.salesCount)) {
        this.rankList[j] = this.rankList[j - 1];
        j -= 1;
      }
      this.rankList[j] = aux;
    }
  }


  rank(rank: number): string {
    if (rank < 4) return "Figurante";
    else if (rank >= 4 && rank < 20) return "Despertar ";
    else if (rank >= 20 && rank < 50) return "Protagonista";
    return "Transformacional";
  }
 
}
