import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../share/service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ShareModule } from '../share/share.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { CompanyCommunicationService } from '../share/service/company-communication.service';



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
    FormsModule,
    HttpClientModule,
    ShareModule,
    NgSelectModule,
    FormsModule

  ],
  providers: [
    ApiService,
    CompanyCommunicationService
  ]

})
export class CompanyModule { }
