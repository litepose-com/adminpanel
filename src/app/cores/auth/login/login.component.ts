import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  position: string = 'top-right';

  constructor(
    private toastService: NbToastrService,
    private router: Router
  ) { }

  login() {
    if(this.email === "" || this.password === "") {
      this.toastService.warning('All fields are required', 'Invalid Input');
      return;
    }

    console.log('user_info', {
      email: this.email,
      pass: this.password
    })

    this.router.navigate(['/dashboard']);
    return;
  }

  forgot() {
    this.router.navigate(['/auth/reset-password'])
  }
  ngOnInit(): void {
  }


}
