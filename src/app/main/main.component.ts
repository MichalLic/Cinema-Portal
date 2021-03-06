import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CinemaService} from '../cinema.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  films;
  constructor(private CinemaService: CinemaService) {
  }

  ngOnInit() {
    this.films = this.CinemaService.getFilmDetails();
  }
}
