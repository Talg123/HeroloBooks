import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {  } from 'events';
import { Book } from '../../objects/book.object';
import {Notification} from '../../services/notification.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  public BookForm : any;
  public tempBook: Book;
  public flag: boolean;
  
  constructor(private notification: Notification) { }

  @Input() book: Book;
  @Input() isOpen: boolean;
  @Input() books: Array<Book>;
  @Output() close = new EventEmitter<any>();
  @Output() saveChanges = new EventEmitter<any>();
  @Output() addBook = new EventEmitter<any>();

  ngOnInit() {
    this.createForm();    
    if(!this.book["Book Title"]){
      this.book = new Book;
      this.book["Book Title"] = "Add new Book";
      this.flag = true;
    }else{
      this.flag = false;
      //parse it into new temp var to commit changes only if submit
      this.tempBook = {...this.book};
      this.createDate();
    }
  }
  /**
   * close the modal
   */
  closeMe():void{
    this.close.emit({isOpen: false})
  }
  /**
   * create date from timestamp
   */
  private createDate():void{
    this.tempBook['Published Date'] = new Date(this.tempBook['Published Date'])
  };
  
  /**
   *  Create form group and controls
   */
  public createForm():void{
    this.BookForm = new FormGroup({
        title : new FormControl('',[Validators.required]),
        author : new FormControl('',[Validators.required]),
        date : new FormControl('',[Validators.required])
    });
  }
  /**
   * save changes and send to parent
   * @param form the form to valid
   */
  save(form):void{
    if(form.valid){
      if(this.checkTitle(this.tempBook["Book Title"],this.tempBook.id)){
        if(this.flag){
          this.addBook.emit(this.tempBook);
          this.notification.success("Book Added!");          
        }else{
        this.notification.success("Saved Changes!");
        this.saveChanges.emit(this.tempBook);
        }
        this.closeMe();
      }else{
        this.notification.error("Title exists");
      }
    }
  }

  private checkTitle(bookTitle,id):boolean{
    let result = true;
    this.books.forEach(book=>{
      if(book["Book Title"] == bookTitle && book.id != id){
        result = false;
        return;
      }
    })
    return result;
  }
}
