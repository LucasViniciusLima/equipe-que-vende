import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/shared/services/media.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  category: Array<any> = [];

  constructor(private readonly mediaService: MediaService) { }

  ngOnInit(): void {
    this.mediaService.getAllMedia().subscribe(response => {
      this.category = response;
    });
  }



}
