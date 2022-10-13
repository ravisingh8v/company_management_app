import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { company } from '../company.model';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {

  public companyData: company[]
  public companyForm: FormGroup;
  public isSubmitted: boolean
  constructor(private formb: FormBuilder) {
    this.companyForm = formb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      tags: ['', [Validators.required]]
    })
    this.isSubmitted = false
    this.companyData = []

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isSubmitted = true

  }
  onReset() {

  }

}
