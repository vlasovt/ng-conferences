import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'collapsable-well',
  templateUrl: './collapsable-well.component.html',
  styleUrls: ['./collapsable-well.component.css']
})
export class CollapsableWellComponent implements OnInit {

  contentVisible: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleContent(){
    this.contentVisible = !this.contentVisible;
  }

}
