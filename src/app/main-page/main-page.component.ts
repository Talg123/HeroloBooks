import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {
  
  public books: Array<object>;
  public load: Boolean;
  public selectedBook: object;
  public isOpen: Boolean;

  constructor(private api: ApiService) {
    this.selectedBook = {};
   }

  ngOnInit() {
    this.isOpen = false;    
    this.load = true;
    if(!this.books){
      this.api.getList().subscribe(
        (response) => {
                        this.books = JSON.parse(response['_body']);
                        this.displayBooks();
                    },
        (error) => console.log(error)
      )
    }else{
      this.load = false;
    }

  }
  /**
   * displaying the books
   */
  private displayBooks(){
    this.load = false;
  }
  /**
   * Edit the book we selected
   * @param book - the book to edit
   */
  public editBook(book){
    this.selectedBook = book.book;
    this.isOpen = true;
  }
}
