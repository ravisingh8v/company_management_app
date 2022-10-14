import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetFirstLetterPipe } from './pipe/get-first-letter.pipe';
import { SearchFilterPipe } from './pipe/search-filter.pipe';



@NgModule({
  declarations: [
    GetFirstLetterPipe,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    // GetFirstLetterPipe

  ],
  exports: [
    GetFirstLetterPipe,
    SearchFilterPipe
  ]
})
export class ShareModule { }
