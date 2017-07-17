import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CinemaService} from '../cinema.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReservationComponent implements OnInit {
  films;
  selectedFilm;
  dateFilm;
  constructor(private cinemaService: CinemaService) { }

  ngOnInit() {
  this.films = this.cinemaService.getFilmDetails();
  }

}
