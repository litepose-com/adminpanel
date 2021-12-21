import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EdititemComponent } from './edititem/edititem.component';
import { ItemlistComponent } from './itemlist/itemlist.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'itemlist',
    component: ItemlistComponent
  },
  {
    path: 'edititem',
    component: EdititemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemtypeRoutingModule { }
