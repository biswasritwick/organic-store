import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  @Input() sidenavstatus:boolean =false
  
sidenav=[
 {
  number:1,
  name:'home',
  icone:'fa-solid fa-house',
  routerlink:'/home'
 },
 {
  number:2,
  name:'everything',
  icone:'fa-solid fa-house',
  routerlink:'/everything'
 },
 {
  number:3,
  name:'grossery',
  icone:'fa-solid fa-house',
  routerlink:'/grossery'
  

 },
 {
  number:4,
  name:'juice',
  icone:'fa-solid fa-house',
  routerlink:'/juice'
 },
 {
  number:5,
  name:'about',
  icone:'fa-solid fa-house',
  routerlink:'/about'
 },
 {
  number:6,
  name:'contact',
  icone:'fa-solid fa-house',
  routerlink:'/contact'
 },
 {
  number:7,
  name:'buskect',
  icone:'fa-solid fa-house',
 },
]


}
