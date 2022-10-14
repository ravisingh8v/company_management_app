import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { company } from 'src/app/company/company.model';
import { HttpClient } from '@angular/common/http';




@Injectable()
export class ApiService {


  public baseUrl: string;
  private employeeDetail: Subject<company>;


  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/company'
    this.employeeDetail = new Subject
  }

  public setEmployee(company: company) {
    this.employeeDetail.next(company);
  }


  getCompanyData(): Observable<company[]> {
    // const url = this.baseUrl + 'company';
    return this.http.get<company[]>(this.baseUrl)
  }

  postData(company: company): Observable<company> {
    // const url = this.baseUrl + 'company'
    return this.http.post<company>(this.baseUrl, company)
  }

  onDelete(id: number): Observable<company> {
    const url = this.baseUrl + '/' + id
    return this.http.delete<company>(url)
  }
  editData(company: company, id: number): Observable<company> {
    const url = this.baseUrl + '/' + id
    return this.http.put<company>(url, company)
  }

  getDetailById(id: number): Observable<company> {
    const url = this.baseUrl + '/' + id
    return this.http.get<company>(url)
  }
}

