import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-everything-allproduct',
  templateUrl: './everything-allproduct.component.html',
  styleUrls: ['./everything-allproduct.component.css']
})
export class EverythingAllproductComponent {
  @Output()filtertooglebar =new EventEmitter<boolean>()
  filterbar:boolean=false;
  filters(){      /*when click filter button*/
    this.filterbar=!this.filterbar
    this.filtertooglebar.emit(this.filterbar)
  }
}
