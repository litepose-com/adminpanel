import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ViewComponent } from './view/view.component';
import { SharesModule } from 'src/app/shares/shares.module';
import { NbActionsModule } from '@nebular/theme';


@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharesModule,
    NbActionsModule,
  ]
})
export class DashboardModule { }
