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
    title:'E-commerce',
    icon: 'shopping-cart-outline',
  },
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
  },
  {
    title: 'Backend Intergration',
    icon: 'settings-outline',
    children: [
      {
        title: 'PHP'
      },
      {
        title: '.NET Core'
      },
      {
        title: 'Node JS'
      },
      {
        title: 'Java'
      },
      {
        title: 'E-commerce'
      }
    ]
  },
  {
    title: 'Features',
    hidden: false
  },
  {
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Stepper',
      },
      {
        title: 'List',
      },
      {
        title: 'Infinite List',
      },
      {
        title: 'Accordion',
      },
      {
        title: 'Tabs',
      },
    ]
  },
  {
    title: 'Forms',
    children: [
      {
        title: 'Form Inputs'
      },
      {
        title: 'Form Layouts'
      },
      {
        title: 'Buttons'
      },
      {
        title: 'Datapicker'
      }
    ]
  },
  {
    title: 'UI Features',
    children: [
      {
        title: 'Grid'
      },
      {
        title: 'Icons'
      },
      {
        title: 'Typography'
      },
      {
        title: 'Animated Searches'
      }
    ]
  },


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
