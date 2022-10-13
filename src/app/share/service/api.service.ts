import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { company } from 'src/app/company/company.model';
import { HttpClient } from '@angular/common/http';




@Injectable()
export class ApiService {
  public baseUrl: string;



  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/'
  }

  getCompanyData(): Observable<company[]> {
    const url = this.baseUrl + 'company';
    return this.http.get<company[]>(url)
  }

  postData(company: company): Observable<company> {
    const url = this.baseUrl + 'company'
    return this.http.post<company>(url, company)
  }

  onDelete(id: number): Observable<company> {
    const url = this.baseUrl + 'company/' + id
    return this.http.delete<company>(url)
  }
  editData(company: company, id: number): Observable<company> {
    const url = this.baseUrl + 'company/' + id
    return this.http.put<company>(url, company)
  }

  getDetailById(id: number): Observable<company> {
    const url = this.baseUrl + 'company/' + id
    return this.http.get<company>(url)
  }
}

