import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'add-new-media',
  templateUrl: './add-new-media.component.html',
  styleUrls: ['./add-new-media.component.css']
})
export class AddNewMediaComponent implements OnInit {

  //@ViewChild('fileInput') fileInput: ElementRef;

  midiaModalOpen: boolean = false;
  modalSucessOpen: boolean = false;
  btnCreateMidia: boolean = false;
  mediaTitle: string = '';
  tags: Array<any> = [];
  selectedTag: string = '';

  imageUrl: string = '';
  imageId: string = '';

  constructor( ) { }

  ngOnInit(): void {
    this.getTags();
  }


  criarMidia() {
    if (!this.canCreateMidia()) return;
    // implement

  }

  getTags() {
    //implement
  }

  async upload(event:any) {
    //change to convert to base64


  }

  cancelarDeletarImagem() {
    //if (this.imageId) this.mediaService.deletarImagem(this.imageId);
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
    this.desableBtnCreateMidia();
    this.imageUrl = '';
    this.imageId = '';
    //this.fileInput.nativeElement.value = '';
    //this.porcentNumber = 0;
  }

  checkFilledForm() {
    if (this.mediaTitle == '') return false;
    else return true;
  }

  closeSucessModal() {
    this.modalSucessOpen = false;
  }

  openSucessModal() {
    this.modalSucessOpen = true;
  }

  ableBtnCreateMidia() {
    this.btnCreateMidia = true;
  }

  desableBtnCreateMidia() {
    this.btnCreateMidia = false;
  }

  canCreateMidia(): boolean {
    return (this.checkFilledForm() && this.btnCreateMidia);
  }

}
