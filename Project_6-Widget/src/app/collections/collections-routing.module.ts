import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CollectionsHomeComponent} from "./collections-home/collections-home.component";
import {BiologyComponent} from "./biology/biology.component";
import {CompaniesComponent} from "./companies/companies.component";
import {PartnersComponent} from "./partners/partners.component";

const routes: Routes = [
  {
    path: '',
    component: CollectionsHomeComponent,
    children: [
      {
        path: '', component: BiologyComponent
      },
      {
        path: 'companies', component: CompaniesComponent
      },
      {
        path: 'partners', component: PartnersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule {
}
