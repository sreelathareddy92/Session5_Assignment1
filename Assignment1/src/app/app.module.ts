import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
// import @class RootComponent
import { RootComponent } from './root.component';


@NgModule({
  declarations: [
    AppComponent,RootComponent // add RootComponent to declarations
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
