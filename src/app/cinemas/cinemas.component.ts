import { Component, OnInit } from '@angular/core';
import {CinemaService} from '../cinema.service';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.scss']
})
export class CinemasComponent implements OnInit {
  cinemas;
  constructor(private CinemaService: CinemaService) { }

  ngOnInit() {
    this.cinemas = this.CinemaService.getCinemas();
  }

}
