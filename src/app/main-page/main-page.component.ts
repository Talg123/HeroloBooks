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
  public isOpenDelete: Boolean;

  constructor(private api: ApiService) {
   }

  ngOnInit() {
    this.isOpen = false;
    this.isOpenDelete = false;
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
   * Save changes and edit the books list
   * @param change 
   */
  saveChanges(change){
    this.selectedBook = change;
    this.books.forEach((book,index)=>{
      if(book.id == this.selectedBook.id){
        this.books[index] = this.selectedBook;
      }
    })
  }
  /**
   * Add new book
   */
  newBook(){
    this.selectedBook = new Book;
    this.isOpen = true;
  }
  /**
   * listen to the event and close the modal
   * @param event 
   */
  closeModal(event):void{
    this.isOpen = false;
    this.isOpenDelete = false;
  }

  /**
   * open remove modal
   * @param book 
   */
  removeBook(book):void{
    this.isOpenDelete = true;
    this.selectedBook = book.book;
  }

  /**
   * remove book from list
   * @param event 
   */
  removeMe(event):void{
    this.books.forEach((book,index)=>{
      if(book.id == event.book.id){
        this.books.splice(index,1);
      }
    })
    this.isOpenDelete = false;
  }
  /**
   * Add new book to the list
   * @param book 
   */
  addNewBook(book : Book):void{
    let id = this.books[this.books.length-1].id;
    book = this.titleDesign(book);
    book.id = id+1;
    this.books.push(book)
  }

  /**
   * displaying the books
   * and filtering the book title
   */
  private displayBooks():void{
    this.books = this.books.filter(book=>{
      return this.titleDesign(book);
    });

    this.load = false;
  }
  /**
   * Edit the book we selected
   * @param book - the book to edit
   */
  public editBook(book):void{
    this.selectedBook = book.book;
    this.selectedBook = this.titleDesign(this.selectedBook);
    this.isOpen = true;
  }
  /**
   * return filtered book title
   * @param book 
   */
  private titleDesign(book : Book) : Book{
    book["Book Title"] = book["Book Title"].replace(/[^a-zA-Z0-9\s]+/g,"");
    book["Book Title"] = book["Book Title"].toLowerCase();
    book["Book Title"] = book["Book Title"].charAt(0).toUpperCase() + book["Book Title"].slice(1);
    return book;
  }
}
