import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
//import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Booklist } from './book-list/book-list.model';
import { asEnumerable } from 'linq-es2015';

 
@Injectable({
 providedIn: 'root'
})
export class BookService {

    mathsBooks = new BehaviorSubject<any>([]);
    // mathsBooks = new BehaviorSubject<Book>([,]);
    //mathsBooks:Book[]=[];
    mathsBooksObservable = this.mathsBooks.asObservable();
    subject : number;
    maths:any;

    constructor() {

        if(this.subject != null || this.subject != undefined){
          this.maths = this.mathsBooks
        )
        }
    }

    

    getMathsBooks(): any {
        const headerObservable = new Observable(observer => {
        setTimeout(() => {
        observer.next(this.mathsBooks);
        }, 1);
        });
        return headerObservable;
        }
        
        setMathsBooks(value: Booklist[]) {
        this.mathsBooks.next(value);
        }
        SetSubject(value: number){
           
            this.subject= value;
        }
        ReturnSubject(){
            return this.subject;
        }

}
