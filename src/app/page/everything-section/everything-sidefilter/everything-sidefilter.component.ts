import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-everything-sidefilter',
  templateUrl: './everything-sidefilter.component.html',
  styleUrls: ['./everything-sidefilter.component.css']
})
export class EverythingSidefilterComponent {
@Input() filtertooglebarstatus:boolean=false;
}
