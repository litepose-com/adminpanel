import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.scss']
})
export class EdititemComponent implements OnInit {

  update: string = ''

  constructor(
    private toastService: NbToastrService,
    private router: Router
  ) { }

  Update() {
    if(this.update === '') {
      this.toastService.warning('All fields are required', 'Invalid Input')
      return;
    }

    this.router.navigate(['/itemtype/itemlist'])
  }

  ngOnInit(): void {
  }

}
