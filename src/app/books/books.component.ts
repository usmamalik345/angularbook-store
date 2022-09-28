import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BOOKS } from 'src/types/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  @Input() book: BOOKS = {} as BOOKS;

  @Output() emitBOOKS = new EventEmitter<BOOKS>();

  constructor() {}

  ngOnInit(): void {}

  addToCart() {
    this.emitBOOKS.emit(this.book );
  }
}
