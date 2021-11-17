import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquationComponent } from './equation/equation.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AnswerHighlighterDirective } from './answer-highlighter.directive';

@NgModule({
  declarations: [
    AppComponent,
    EquationComponent,
    AnswerHighlighterDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
