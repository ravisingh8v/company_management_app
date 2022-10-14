import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/share/service/api.service';
import { CompanyCommunicationService } from 'src/app/share/service/company-communication.service';
import { company } from '../company.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  public companyData: company[]


  constructor(public companyService: ApiService,
    public setCompanyData: CompanyCommunicationService) {
=======
  public filter: string = ''
  constructor(public companyService: ApiService) {

    this.companyData = []

  }

  ngOnInit(): void {
    console.log('hello');
    this.setCompanyData.companyDetail.subscribe((res) => {
      this.companyData.push(res)
    })

    this.setCompanyData.editCompanyDetail.subscribe((res) => {
      if (res) {
        const index = this.companyData.findIndex((company: company) => company.id === res.id);
        this.companyData.splice(index, 1, res);
      }
    })

    this.getCompanyData()
  }

  onDelete(id: number) {
    const deleteData = confirm('Are You Sure You Want to Delete This Record?')
    if (deleteData) {
      this.companyService.onDelete(id).subscribe(res => {
        this.getCompanyData()
      })
    }

  }

  getCompanyData() {
    this.companyService.getCompanyData().subscribe((response) => {
      this.companyData = response
      // console.log(this.companyData);
    })

  }

}
