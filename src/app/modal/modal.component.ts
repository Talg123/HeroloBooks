import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  constructor() { }

  @Input() book: any;
  

  ngOnInit() {
    if(!this.book["Book Title"]){
      this.book["Book Title"] = "Add new Book";
    }
  }

}
