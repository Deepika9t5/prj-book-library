import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { ChapterComponent } from './book-list/chapter/chapter.component';

const routes: Routes = [
  {path: 'addbook', component: BookComponent},
  {path: 'bookList', component: BookListComponent},
  {path: 'addChapter', component: ChapterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [BookComponent, BookListComponent, ChapterComponent]
