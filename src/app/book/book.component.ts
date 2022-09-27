import { Component, OnInit } from '@angular/core';


let i = 1;

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  books: BOOKS[] = [
    {
      name: 'do Code easy ',
      author: 'Usama ',
      images:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRU8lGhBAKFrl3eSAgVM5yBA0_HL36alHS3A&usqp=CAU',
    },

    {
      name: ' Code easy ',
      author: 'fahad ',
      images: 'https://tutorialzine.com/media/2018/01/NodeJs_Succinctly2.jpg',
    },
    {
      name: ' easy Coding tips  ',
      author: 'Fazeel ',
      images:
        'https://images-na.ssl-images-amazon.com/images/I/619M-4xNINL._AC_UL600_SR600,400_.jpg',
    },
    {
      name: ' how you can do your code fast ',
      author: ' Ateeb ',
      images:
        'https://images-na.ssl-images-amazon.com/images/I/51fRKyqPWDL.jpg',
    },
  ];

  isdistale = true;

  constructor() {}

  ngOnInit(): void {}

  names: string = 'asdas';
}
