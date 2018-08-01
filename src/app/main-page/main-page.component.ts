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

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.load = true;
    this.api.getList().subscribe(
      (response) => {
                      this.books = JSON.parse(response['_body']);
                      this.displayBooks();
                  },
      (error) => console.log(error)
    )
  }
  /**
   * displaying the books
   */
  private displayBooks(){
    this.load = false;
  }
}
