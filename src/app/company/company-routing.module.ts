import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyComponent } from './company.component';
import { CompanyResolver } from './company.resolver';

const routes: Routes = [{
  path: '', component: CompanyComponent, children: [
    {
      path: 'add', component: CompanyFormComponent,
    },
    {
      path: 'edit/:id', component: CompanyFormComponent, resolve: { company: CompanyResolver }
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
