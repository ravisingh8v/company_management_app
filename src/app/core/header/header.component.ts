import { Component, OnInit } from '@angular/core';
import { company } from 'src/app/company/company.model';
import { BreadcrumbService } from 'src/app/share/service/breadcrumb.service';
import { CompanyCommunicationService } from 'src/app/share/service/company-communication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title!: string
  constructor(private breadcrumb: BreadcrumbService,
  ) {
  }

  ngOnInit(): void {
    this.title = ''
    this.breadcrumb.breadcrumb.subscribe(res => this.title = res)
    console.log(this.title);
  }

}
