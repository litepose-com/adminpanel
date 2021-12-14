import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  email: string = ""

  constructor(
    private toastService: NbToastrService,
    private router: Router
  ) { }

  Verify() {
    if(this.email === "" ) {
      this.toastService.warning('All fields are required', 'Invalid Input')
      return;
    }

    // console.log(this.email, 'confirm')

    this.router.navigate(['./auth/confirmcode']);
    return;
  }

  ngOnInit(): void {
  }

}
