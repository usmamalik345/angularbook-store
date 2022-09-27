import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  @Input() book: BOOKS = {} as BOOKS;

  constructor() {}

  ngOnInit(): void {}
}
