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
  @Output() remove = new EventEmitter<any>();

  ngOnInit() {

  }
  /**
   * send event to edit a book
   * @param book 
   */
  private editBook(book) :void{
    this.edit.emit({book: book});
  }
  /**
   * send event to remove a book
   * @param book 
   */
  private removeBook(book) :void{
    this.remove.emit({book: book});
  }
}
