import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { TareaModule } from './tarea/tarea.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
