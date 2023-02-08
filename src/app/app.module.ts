import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LatMovComponent } from './lat-mov/lat-mov.component';
import { AllMovComponent } from './all-mov/all-mov.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavComponent,
    FooterComponent,
    LatMovComponent,
    AllMovComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
