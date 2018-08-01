import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.less']
})
export class CardBookComponent implements OnInit {

  constructor() { }
  @Input() books: any;
  ngOnInit() {
  }

}
