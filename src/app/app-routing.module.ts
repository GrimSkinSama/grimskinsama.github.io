import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnggotaComponent } from './add-anggota/add-anggota.component';
import { ShowAnggotaComponent } from './show-anggota/show-anggota.component';
import { ShowDetailAnggotaComponent } from './show-detail-anggota/show-detail-anggota.component';

const routes: Routes = [
  {path: 'peoples', component: ShowAnggotaComponent},
  {path: '', redirectTo: '/peoples', pathMatch: 'full'},
  {path: 'addmember', component: AddAnggotaComponent},
  {path: 'detailmember/:id', component: ShowDetailAnggotaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
