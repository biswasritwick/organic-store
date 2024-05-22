import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home-section/home/home.component';
import { AboutComponent } from './page/about-section/about/about.component';
import { ContactComponent } from './page/contact-section/contact/contact.component';
import { EverythingComponent } from './page/everything-section/everything/everything.component';
import { JuiceComponent } from './page/juice-section/juice/juice.component';
import { NavbarComponent } from './navbar-footer/navbar/navbar.component';
import { FooterComponent } from './navbar-footer/footer/footer.component';
import { GrosseryComponent } from './page/grossery-section/grossery/grossery.component';
import { SideNavComponent } from './navbar-footer/side-nav/side-nav.component';
import{EverythingSidefilterComponent} from './page/everything-section/everything-sidefilter/everything-sidefilter.component'
import{EverythingAllproductComponent} from '../app/page/everything-section/everything-allproduct/everything-allproduct.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    EverythingComponent,
    JuiceComponent,
    NavbarComponent,
    FooterComponent,
    GrosseryComponent,
    SideNavComponent,
    EverythingSidefilterComponent,
    EverythingAllproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
