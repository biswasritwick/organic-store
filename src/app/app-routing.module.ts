  import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home-section/home/home.component';
import { AboutComponent } from './page/about-section/about/about.component';
import { ContactComponent } from './page/contact-section/contact/contact.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},


  {path:'everything',loadChildren:()=>import('../app/page/everything-section/everything-section.module').then((m)=>m.EverythingSectionModule)},
  {path:'juice',loadChildren:()=>import('../app/page/juice-section/juice-section.module').then((m)=>m.JuiceSectionModule)},
  {path:'grossery',loadChildren:()=>import('../app/page/grossery-section/grossery-section.module').then((m)=>m.GrosserySectionModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
