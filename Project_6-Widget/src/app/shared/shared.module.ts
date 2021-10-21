import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDividerComponent } from './my-divider/my-divider.component';



@NgModule({
  declarations: [
    MyDividerComponent
  ],
  exports: [
    MyDividerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
