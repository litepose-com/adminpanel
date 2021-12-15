import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemtypeRoutingModule } from './itemtype-routing.module';
import { CreateComponent } from './create/create.component';
import { NbButtonModule, NbCardModule, NbInputModule, NbLayoutModule, NbTableModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { EdititemComponent } from './edititem/edititem.component';


@NgModule({
  declarations: [
    CreateComponent,
    ItemlistComponent,
    EdititemComponent
  ],
  imports: [
    CommonModule,
    ItemtypeRoutingModule,
    NbLayoutModule,
    NbCardModule,
    ReactiveFormsModule,
    FormsModule,
    NbInputModule,
    NbButtonModule,
    NbTableModule,
  ]
})
export class ItemtypeModule { }
