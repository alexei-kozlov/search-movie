import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {MovieComponent} from './components/movie/movie.component';
import {ErrorComponent} from './components/error/error.component';
import {OmdbService} from './services/omdb.service';
import {FormComponent} from './components/form/form.component';
import {InterceptorService} from "./services/interceptor.service";
import {LoaderService} from "./services/loader.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieComponent,
    ErrorComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    OmdbService,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
