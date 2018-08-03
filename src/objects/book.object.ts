import {Injectable} from '@angular/core';

@Injectable()

export class Book {

    constructor () {}
    
    public id: number;
    public "Book Title": string;
    public "Published Date": Date;
    public "Author Name" : string;
}