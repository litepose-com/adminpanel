import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-confirmcode',
  templateUrl: './confirmcode.component.html',
  styleUrls: ['./confirmcode.component.scss']
})
export class ConfirmcodeComponent implements OnInit {

  code: string = ""

  constructor(
    private toastService: NbToastrService,
    private router: Router
  ) { }

  Code() {
    if(this.code === "") {
      this.toastService.warning('All fields are required', 'Invalid Input')
      return;
    }

    // console.log(this.code, 'confirm')

    this.router.navigate(['/auth/new-password'])
  }
  ngOnInit(): void {
  }

}
