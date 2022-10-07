import { Component, Input, OnInit } from '@angular/core';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'add-new-media',
  templateUrl: './add-new-media.component.html',
  styleUrls: ['./add-new-media.component.css']
})
export class AddNewMediaComponent implements OnInit {

  tags: Array<any> = [];
  arquivoFoto: any;
  arquivoFotoBase64: string = '';
  imageSrc: string = '';

  midiaModalOpen: boolean = false;
  modalSucessOpen: boolean = false;
  mediaTitle: string = '';

  selectedTag: any;

  constructor(private mediaService: MediaService) { }

  ngOnInit(): void {
    this.mediaService.getAllMedia().subscribe(response => {
      this.tags = response;
      this.selectedTag = this.tags[0].categoria;
    });
  }


  criarMidia() {
    if (!this.checkFilledForm()) return;

    let media = { title: this.mediaTitle, data: this.arquivoFotoBase64 };

    this.mediaService.createMedia(media, this.selectedTag).subscribe(response => {
      this.cleanForm();
      this.closeMidiaModal();
      this.openSucessModal();      
    });
  }

  async upload(event: any) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.arquivoFoto = file;
      this.handleInputChange(file);
    } else {
      alert('No file selected');
    }
  }

  handleInputChange(arquivo: File) {
    var file = arquivo;
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e: any) {
    let reader = e.target;
    var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
    this.imageSrc = 'data:image/png;base64,' + base64result;
    this.arquivoFotoBase64 = base64result;
  }

  cancelarDeletarImagem() {
    this.cleanForm();
  }

  openMidiaModal() {
    this.midiaModalOpen = true;
  }

  closeMidiaModal() {
    this.midiaModalOpen = false;
  }

  cancelar() {
    this.closeMidiaModal();
    this.cancelarDeletarImagem()
  }

  cleanForm() {
    this.mediaTitle = '';
    this.imageSrc = '';
    this.arquivoFoto = {};
    this.arquivoFotoBase64 = '';
  }

  checkFilledForm() {
    if (this.mediaTitle == '' || this.arquivoFotoBase64 == '') return false;
    else return true;
  }

  closeSucessModal() {
    this.modalSucessOpen = false;    
  }

  openSucessModal() {
    this.modalSucessOpen = true;
  }


}
