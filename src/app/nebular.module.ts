import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
    NbThemeModule, 
    NbLayoutModule, 
    NbInputModule, 
    NbCardModule, 
    NbToastrModule, 
    NbActionsModule, 
    NbSidebarModule, 
    NbMenuModule, 
    NbSelectModule 
  } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

const Modules: any = [
  NbEvaIconsModule,
  NbThemeModule.forRoot({ name: 'default' }),
  NbLayoutModule,
  NbInputModule,
  NbCardModule,
  NbToastrModule.forRoot(),
  NbActionsModule,
  NbSidebarModule.forRoot(),
  NbMenuModule.forRoot(),
  NbSelectModule
];

@NgModule({
  declarations: [],
  imports: [
    ...Modules
  ],
  exports: [
    ...Modules
  ]
})
export class NebularModule { }
