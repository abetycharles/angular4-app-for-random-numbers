import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RandomNumberComponent } from './components/random-number/random-number.component';
import { RandomService } from './services/random.service';


@NgModule({
  declarations: [
    AppComponent,
    RandomNumberComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [RandomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
