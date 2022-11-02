import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/share/service/api.service';
import { BreadcrumbService } from 'src/app/share/service/breadcrumb.service';
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
  public tags = [{ id: 1, subject: 'Angular' }, { id: 2, subject: 'Bootstrap' }, { id: 3, subject: 'SCSS' }];
  public file!: File
  base64: any;
  public imagePath: any;
  imageName: any;
  // public showImage: boolean

  constructor(
    public setCompanyData: CompanyCommunicationService,
    public formb: FormBuilder,
    private companyService: ApiService,
    private actRouter: ActivatedRoute,
    private breadcrumb: BreadcrumbService,
    private domSanitizer: DomSanitizer
  ) {
    this.companyForm = formb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      tags: [''],
      compamnyImageName: [''],
      compamnyImagePath: [''],
    })
    // this.showImage = false
    this.btnTitle = "Submit"
    this.id = 0
    this.isSubmitted = false
    this.companyData = []

    this.actRouter.params.subscribe((res) => {
      this.id = res['id']
      if (this.id) {
        // this.getDetailsById()
        this.btnTitle = "Edit"
      }
    })

  }
  ngOnInit(): void {
    this.actRouter.data.subscribe(res => {
      this.companyForm.patchValue(res['company'])
      this.imagePath = this.domSanitizer.bypassSecurityTrustResourceUrl(this.companyForm.get('compamnyImagePath')?.value);
      this.imageName = this.domSanitizer.bypassSecurityTrustResourceUrl(this.companyForm.get('compamnyImageName')?.value);
    })
  }

  getCompanyData() {
    this.companyService.getCompanyData().subscribe(res => {
      this.companyData = res
    })

  }
  // getDetailsById() {
  //   this.companyService.getDetailById(this.id).subscribe(res => {
  //     this.companyForm.patchValue(res)
  //   })
  // }



  onSubmit() {
    this.isSubmitted = true
    if (this.companyForm.valid) {

      if (this.id) {
        // this.showImage = true
        this.companyForm.controls['compamnyImageName'].patchValue(this.file.name);
        this.companyForm.controls['compamnyImagePath'].patchValue(this.base64);
        this.companyService.editData(this.companyForm.value, this.id).subscribe(res => {
          this.setCompanyData.editCompanyDetail.next(res)
        })
      } else {
        this.companyForm.controls['compamnyImageName'].setValue(this.file.name);
        this.companyForm.controls['compamnyImagePath'].setValue(this.base64);
        this.companyService.postData(this.companyForm.value).subscribe((res) => {
          this.setCompanyData.companyDetail.next(res)
          alert("successfull")
        })
      }
      this.isSubmitted = false
      this.onReset()
    }

  }

  onReset() {
    this.companyForm.reset()
  }

  // Image file upload 

  onSelectFile(event: any) {
    if (event.target.files[0].length > 0) {
      this.file = event.target.files[0];
      // this.showImage = true
      const fileReader = new FileReader()
      fileReader.readAsDataURL(this.file)
      fileReader.onload = () => {
        this.base64 = String(fileReader.result)
        this.imagePath = this.domSanitizer.bypassSecurityTrustResourceUrl(this.base64);
      }
    }


  }


  // postCompanyData() {
  //   console.log(this.companyData);
  // }

  // get company Data 


}
