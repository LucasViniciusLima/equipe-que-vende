import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaService } from 'src/app/shared/services/media.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  category: Array<any> = [];
  userIsAdm: boolean = false;
  navState: any;

  imageViewOpen: boolean = false;
  selectedImageToView: any;

  constructor(private readonly mediaService: MediaService, private route: Router) {
    this.navState = this.route.getCurrentNavigation()?.extras?.state;

    if (this.navState != null) {
      this.userIsAdm = this.navState.admin;
    }
  }

  ngOnInit(): void {
    this.mediaService.getAllMedia().subscribe(response => {
      this.category = response;
    });
    MediaService.emitCursoCriado.subscribe(resp => {

      for (let i = 0; i < this.category.length; i++) {
        if (this.category[i].categoria == resp.categoria) {
          this.category[i].depoimentosFoto.push(resp.depoimentosFoto);
        }
      }

    });
  }

  closeImageView(){
    this.imageViewOpen = false;
  }

  openImageView(foto: any){
    this.selectedImageToView = foto;
    this.imageViewOpen = true;
  }


}
