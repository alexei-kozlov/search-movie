import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent }      from './components/movie/movie.component';
import { ErrorComponent }  from './components/error/error.component';

const routes: Routes = [
  { path: 'movie', component: MovieComponent },
  { path: 'error', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
