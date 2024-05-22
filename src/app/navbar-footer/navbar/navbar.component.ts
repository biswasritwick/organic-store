import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() sidenavbar = new EventEmitter<boolean>()     
  menustatus: boolean = false;    // menustatus for side nav
  heder_variable = false     //when display scroll then sidenav apply CSS
  @HostListener("document:scroll")
  scroll() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.heder_variable = true

      if (this.menustatus = true) {           
        this.menustatus = false
        this.sidenavbar.emit(this.menustatus)
        // this IF Section for when display scroll,then side nav close
      }
    }
    else {
      this.heder_variable = false

    }
  }

  sidenav() {   // sidenav open click function
    this.menustatus = !this.menustatus
    this.sidenavbar.emit(this.menustatus)
    // console.warn('click sidenav btn');

  }
}
