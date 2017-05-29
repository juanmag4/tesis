import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyApp } from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ MyApp ],
  entryComponents: [ MyApp ],
  providers: [ { provide: ErrorHandler } ]
})
export class AppModule { }
