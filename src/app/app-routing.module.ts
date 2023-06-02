import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddComponent } from './add/add.component';
import { LeadComponent } from './lead/lead.component';

const routes: Routes = [
  {//localhost://4200 - main content
    path:'',component:MainContentComponent
  },
  {
    path:'gallery',component:GalleryComponent
  },
  {
    path:'employee',component:EmployeeComponent
  },
  {
    path:'add',component:AddComponent
  },
  {
    path:'lead',component:LeadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
