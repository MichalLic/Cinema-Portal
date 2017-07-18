import {AfterViewInit, Component, ElementRef, OnInit, Renderer, ViewChild, ViewEncapsulation} from '@angular/core';
import {CinemaService} from '../cinema.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ReservationComponent implements OnInit, AfterViewInit {
  films;
  dateFilm;
  seatSeries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  seatRows = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
  seatCounter = 0;
  currentTime = new Date();
  isReserved = false;
  filmPrice = 7;
  filmTitle;
  seatsArray = [];
  disabledSeats;

  @ViewChild('seat') seat: ElementRef;

  constructor(private cinemaService: CinemaService) {
  }

  ngOnInit() {
    this.films = this.cinemaService.getFilmDetails();
    this.isSessionStorageFilmTitle();
  }

  ngAfterViewInit() {
      if (JSON.parse(localStorage.getItem('seats'))) {
        this.disabledSeats = JSON.parse(localStorage.getItem('seats'))
          .map(item => {
            document.getElementById(item).classList.add('reserved', 'disabled');
          });
      }
  }

  reservedSeat(seat) {
    seat.target.classList.remove('reserved');
    this.seatCounter--;
  }

  unreservedSeat(event, seat) {
    event.target.classList.add('reserved');
    this.seatCounter++;
    console.log(seat.id);
    if (localStorage.getItem('seats') === null) {
      this.seatsArray = [];
      this.seatsArray.push(seat.id);
      localStorage.setItem('seats', JSON.stringify(this.seatsArray));
    } else {
      this.seatsArray = JSON.parse(localStorage.getItem('seats'));
      this.seatsArray.push(seat.id);
      localStorage.setItem('seats', JSON.stringify(this.seatsArray));
    }
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
