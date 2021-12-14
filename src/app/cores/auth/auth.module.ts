import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { NbButtonModule, NbCardModule, NbInputModule, NbLayoutModule, NbToastrModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmcodeComponent } from './confirmcode/confirmcode.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';

@NgModule({
  declarations: [
    LoginComponent,
    ResetpasswordComponent,
    ConfirmcodeComponent,
    NewpasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbToastrModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }
