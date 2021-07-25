import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookService } from '../bookService.service';
import { asEnumerable } from 'linq-es2015';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Output() selected = new EventEmitter<void>();
  mathsBooksList: any[];
  subject: number;
  constructor(
    private bookService: BookService
  ) {
    // this.subject  = this.bookService.ReturnSubject();
    // this.bookService.mathsBooksObservable
    // .subscribe((data: any) => {
    //   this.mathsBooksList = data; 
    //   if(this.subject != null || this.subject != undefined  ){
    //   this.mathsBooksList= asEnumerable(this.mathsBooksList).Where(x => x.id == this.subject).ToArray();}
    // });
   }

  ngOnInit(): void {
    this.subject  = this.bookService.ReturnSubject();
    this.bookService.mathsBooksObservable
    .subscribe((data: any) => {
      this.mathsBooksList = data; 
      if(this.subject != null || this.subject != undefined  ){
      this.mathsBooksList= asEnumerable(this.mathsBooksList).Where(x => x.id == this.subject).ToArray();}
    });
  }

  onSelected(){
    this.selected.emit();
  }

}
