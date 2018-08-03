import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {Book} from '../../objects/book.object';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {
  
  public books: Array<Book>;
  public load: Boolean;
  public selectedBook: Book;
  public isOpen: Boolean;

  constructor(private api: ApiService) {
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

  saveChanges(change){
    this.selectedBook = change;
    this.books.forEach((book,index)=>{
      if(book.id == this.selectedBook.id){
        this.books[index] = this.selectedBook;
      }
    })
  }
  /**
   * listen to the event and close the modal
   * @param event 
   */
  closeModal(event){
    this.isOpen = event.isOpen;
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
