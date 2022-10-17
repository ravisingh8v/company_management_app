import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbService } from '../share/service/breadcrumb.service';
import { CompanyCommunicationService } from '../share/service/company-communication.service';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    BreadcrumbService,
    CompanyCommunicationService
  ]

})
export class CoreModule { }
