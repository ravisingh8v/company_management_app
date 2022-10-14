import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../share/service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { GetFirstLetterPipe } from '../share/pipe/get-first-letter.pipe';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    CompanyComponent,
    CompanyFormComponent,
    CompanyListComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ShareModule

  ],
  providers: [
    ApiService
  ]

})
export class CompanyModule { }
