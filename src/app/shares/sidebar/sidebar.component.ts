import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { expand } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items: NbMenuItem[] = [
  {
  title: 'Item types',
  icon: 'layers-outline',
  children: [
    {
      title: 'create',
      url: 'itemtype/create'
    },
    {
      title: 'Item list',
      url: 'itemtype/itemlist'
    },
    {
      title: 'Edit Item',
      url: 'itemtype/edititem'
    }
  ]
},
{
  title: 'chat',
}

 ]

  constructor() { }

  ngOnInit(): void {
  }

}
