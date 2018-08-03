import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Book } from '../../objects/book.object';
import { Notification } from '../../services/notification.service';


@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.less']
})
export class ModalDeleteComponent implements OnInit {

  constructor(private notification: Notification) { }
  @Input() book: Book;
  @Input() isOpenDelete: boolean;
  @Output() close = new EventEmitter<any>();
  @Output() removeMe = new EventEmitter<any>();

  ngOnInit() {
  }
  /**
   * close the modal
   */
  closeMe():void{
    this.close.emit({isOpenDelete: false})
  }
  /**
   * remove book
   */
  remove():void{
    this.removeMe.emit({book: this.book});
    this.notification.success("Book Deleted");
  }
}
