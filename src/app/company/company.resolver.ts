import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ApiService } from '../share/service/api.service';
import { company } from './company.model';

@Injectable()
export class CompanyResolver implements Resolve<company> {
  public id: number

  constructor(private apiService: ApiService) {
    this.id = 0
  }
  resolve(route: ActivatedRouteSnapshot): Observable<company> {
    this.id = route.params['id']
    return this.apiService.getDetailById(this.id)
  }
}
