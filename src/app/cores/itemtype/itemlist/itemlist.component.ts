import { Component, OnInit } from '@angular/core';

 interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean
 }

 interface FSEntry {
   name: string;
   status: boolean;
   action: string;
 }

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.scss']
})
export class ItemlistComponent implements OnInit {

  customColumn = 'item name';
  defaultColumns = ['status','action'];
  allColumns = [ this.customColumn,this.defaultColumns];

  data: TreeNode<FSEntry>[] = [

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
