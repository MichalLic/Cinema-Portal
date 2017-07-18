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
  dateFilm;
  seatSeries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  seatRows = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
  seatCounter = 0;
  currentTime = new Date();
  isReserved = false;
  filmPrice = 7;
  filmTitle;

  constructor(private cinemaService: CinemaService) {
  }

  ngOnInit() {
    this.films = this.cinemaService.getFilmDetails();
    this.isSessionStorageFilmTitle();
  }

  reservedSeat(seat) {
    seat.target.classList.remove('reserved');
    this.seatCounter--;
  }

  unreservedSeat(seat) {
    seat.target.classList.add('reserved');
    this.seatCounter++;
  }

  checkFilmReservation() {
    this.isReserved = true;
    this.filmTitle = sessionStorage.removeItem('filmTitle');
  }

  isSessionStorageFilmTitle() {
    if (JSON.parse(sessionStorage.getItem('filmTitle'))) {
      this.filmTitle = JSON.parse(sessionStorage.getItem('filmTitle')).title;
    }
  }

}
