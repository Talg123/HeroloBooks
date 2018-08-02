import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.less']
})
export class CardBookComponent implements OnInit {

  constructor() { }

  @Input() books: any;
  @Output() edit = new EventEmitter<any>();
  
  ngOnInit() {

  }
  /**
   * send event to edit a book
   * @param book 
   */
  private editBook(book){
    this.edit.emit({book: book});
  }
}
