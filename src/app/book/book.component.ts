import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Booklist } from '../book-list/book-list.model';
import { BookService } from '../bookService.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @ViewChild('subjectnameinput') subjectnameInputRef: ElementRef;
  @ViewChild('booknameinput') booknameInputRef: ElementRef;
  @Output() showButton:boolean = false;
  @Output() bookAdded = new EventEmitter();
  bookList: Booklist[];
  mathsBookList = [];
  subject: any;

  constructor(private booksService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.bookList = [
      {id:1, name: "Maths"},
      {id:2, name: "Physics"},
      {id:3, name: "Chemistry"}
    ];
    this.booksService.mathsBooksObservable
    .subscribe((data: Booklist[]) => {
      console.log(data)
      this.mathsBookList = data;
    })
  }

  onAddBook(){
    this.showButton = !this.showButton;
    //this.router.navigate(['/addbook']);
  }

  MathsClicked(){
    this.booksService.SetSubject(1);
    this.router.navigate(['/bookList']);
  }
  PhysClicked(){
    this.booksService.SetSubject(2);
    this.router.navigate(['/bookList']);
  }
  ChemClicked(){
    this.booksService.SetSubject(3);
    this.router.navigate(['/bookList']);
  }

  onSave(){
    alert("Saved!!")
     const subjectName = this.subjectnameInputRef.nativeElement.value;
     const bookName = this.booknameInputRef.nativeElement.value;
     console.log(subjectName, bookName)
     const newList = new Booklist(subjectName, bookName);
     this.bookAdded.emit(newList);

     this.mathsBookList.push(newList);

     this.booksService.setMathsBooks(this.mathsBookList);
  }

}
