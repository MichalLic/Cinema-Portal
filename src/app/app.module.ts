import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import {CinemaService} from './cinema.service';
import {RouterModule, Routes} from '@angular/router';
import { NewsComponent } from './news/news.component';
import {OwlModule} from 'ng2-owl-carousel';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { FooterComponent } from './footer/footer.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CinemasComponent } from './cinemas/cinemas.component';

export  const routes: Routes = [
  {path: '', component: MainComponent, pathMatch: 'full'},
  {path: 'detail', children: [
    {path: '', component: NewsComponent},
    {path: ':name', component: ViewDetailComponent}
  ]},
  {path: 'news', component: NewsComponent, pathMatch: 'full'},
  {path: 'reservation', component: ReservationComponent, pathMatch: 'full'},
  {path: 'cinemas', component: CinemasComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MainComponent,
    NewsComponent,
    OwlCarouselComponent,
    FooterComponent,
    ViewDetailComponent,
    ReservationComponent,
    CinemasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    OwlModule
  ],
  providers: [CinemaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
