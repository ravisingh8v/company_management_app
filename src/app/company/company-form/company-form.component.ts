import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/share/service/api.service';
import { CompanyCommunicationService } from 'src/app/share/service/company-communication.service';
import { company } from '../company.model';


@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CompanyFormComponent implements OnInit {
  // @Input() companyData: company[]
  public companyData: company[]
  public companyForm: FormGroup;
  public isSubmitted: boolean;
  public id: number;
  public btnTitle: string
  public selected = [1]
  public cars = [{ id: 1, Subject: 'Select', disbaled: true }, { id: 2, Subject: 'Bootstrap' }, { id: 1, Subject: 'SCSS' }];

  constructor(
    public setCompanyData: CompanyCommunicationService,
    public formb: FormBuilder,
    private companyService: ApiService,
    private actRouter: ActivatedRoute
  ) {

    this.companyForm = formb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      tags: ['']
    })
    this.btnTitle = "Submit"
    this.id = 0
    this.isSubmitted = false
    this.companyData = []

    this.actRouter.params.subscribe((res) => {
      this.id = res['id']
      if (this.id) {
        this.getDetailsById()
        this.btnTitle = "Edit"
      }
    })

  }
  ngOnInit(): void {

  }

  getCompanyData() {
    this.companyService.getCompanyData().subscribe(res => {
      this.companyData = res
    })

  }
  getDetailsById() {
    this.companyService.getDetailById(this.id).subscribe(res => {
      this.companyForm.patchValue(res)
    })
  }

  onSubmit() {
    this.isSubmitted = true
    if (this.companyForm.valid) {

      if (this.id) {
        this.companyService.editData(this.companyForm.value, this.id).subscribe(res => {

          this.setCompanyData.editCompanyDetail.next(res)
=======


        })
      } else {

        this.companyService.postData(this.companyForm.value).subscribe((res) => {
          this.setCompanyData.companyDetail.next(res)
        })
      }
      this.isSubmitted = false
      this.onReset()
    }

  }

  onReset() {
    this.companyForm.reset()
  }

  postCompanyData() {

    console.log(this.companyData);
  }

  // get company Data 


}
