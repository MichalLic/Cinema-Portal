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
  seatSeries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  seatRows = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
  seatCounter = 0;

  constructor(private cinemaService: CinemaService) {
  }

  ngOnInit() {
    this.films = this.cinemaService.getFilmDetails();
  }

  reservedSeat(seat) {
    seat.target.classList.remove('reserved');
    this.seatCounter--;
  }

  unreservedSeat(seat) {
    seat.target.classList.add('reserved');
    this.seatCounter++;
  }

}
