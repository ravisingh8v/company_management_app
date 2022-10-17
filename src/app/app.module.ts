import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { GetFirstLetterPipe } from './share/pipe/get-first-letter.pipe';
import { share } from 'rxjs';
import { ShareModule } from './share/share.module';
import { NgDynamicBreadcrumbModule } from "ng-dynamic-breadcrumb";
import { BreadcrumbService } from './share/service/breadcrumb.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    NgDynamicBreadcrumbModule


  ],
  providers: [BreadcrumbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
