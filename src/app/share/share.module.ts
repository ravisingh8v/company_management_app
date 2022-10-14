import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetFirstLetterPipe } from './pipe/get-first-letter.pipe';



@NgModule({
  declarations: [
    GetFirstLetterPipe
  ],
  imports: [
    CommonModule

  ],
  exports: [
    GetFirstLetterPipe
  ]
})
export class ShareModule { }
