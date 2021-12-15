import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  text : string = ""
  constructor(
    private toastService: NbToastrService,
    private router: Router
  ) { }

  create() {
    if( this.text === '') {
      this.toastService.warning('All fields are required', 'Invalid Input')
      return;
    }

  }
  ngOnInit(): void {
  }

}
