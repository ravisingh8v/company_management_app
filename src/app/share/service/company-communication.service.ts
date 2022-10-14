import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { company } from 'src/app/company/company.model';

@Injectable()

export class CompanyCommunicationService {

  public companyDetail: Subject<company>;
  public editCompanyDetail: Subject<company>;

  constructor() {
    this.companyDetail = new Subject;
    this.editCompanyDetail = new Subject;
  }

}
