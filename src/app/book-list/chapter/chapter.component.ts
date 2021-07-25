import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Booklist } from '../book-list.model';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  @Output() bookWasSelected = new EventEmitter<Booklist>();
  bookmodel: Booklist[];

  constructor() { }

  ngOnInit(): void {
  }

  onSubjectSelected(book: Booklist){
    this.bookWasSelected.emit(book);
  }

}
