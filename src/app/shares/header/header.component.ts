import { Component, OnInit } from '@angular/core';
import { NbIconConfig, NbSidebarService } from '@nebular/theme';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items = [
    {
      title: 'Profile',
      url: '/auth/login'
    },
    {
      title: 'Logout',
    }
  ]

  // disabledIconConfig: NbIconConfig = {icon: 'settings-2-outline', pack: 'eva' };
  toogle_status: boolean = false;
  constructor(
    private sideBarService: NbSidebarService
  ) { }

  selectedItem = 'light';

  toggle() {
    this.toogle_status = !this.toogle_status;
    this.sideBarService.toggle(this.toogle_status, 'lefts');
  }



  ngOnInit(): void {
  }

}
