import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import ('./cores/auth/auth.module')
    .then (m => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import ('./cores/dashboard/dashboard.module')
    .then (m => m.DashboardModule)
  },
  {
    path: 'itemtype',
    loadChildren: () => import ('./cores/itemtype/itemtype.module')
    .then( m => m.ItemtypeModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
