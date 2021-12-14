import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.scss']
})
export class NewpasswordComponent implements OnInit {

  newpassword: string = ""
  confirmpassword: string = ""

  constructor(
    private toastService: NbToastrService,
    private router: Router
  ) { }

  Submit() {
    if(this.newpassword === "" || this.confirmpassword === "") {
      this.toastService.warning('All fields are required', 'Invalid Input');
      return;
    }

    if( this.newpassword !== this.confirmpassword) {
      this.toastService.warning('Confirm your password')
      return;
    }

    // console.log('user_info', {
    //   email: this.newpassword,
    //   pass: this.confirmpassword
    // })

    this.router.navigate(['/auth/login']);
    return;
  }

  ngOnInit(): void {
  }

}
