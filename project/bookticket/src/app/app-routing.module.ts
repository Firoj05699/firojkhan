import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { TheaterComponent } from './theater/theater.component';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "theater",
    component : TheaterComponent
  },
  {
    path : "book",
    component : BookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
