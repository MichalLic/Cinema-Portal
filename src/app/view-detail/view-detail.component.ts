import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {CinemaService} from '../cinema.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewDetailComponent implements OnInit {
  film;

  constructor(private route: ActivatedRoute,
              private cinemaService: CinemaService,
              private  router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.getDetail(params);
      });
  }

  getDetail(params) {
    this.cinemaService.getFilmDetails()
      .map((detail) => {
        if (params.name === detail.title) {
          console.log(detail);
          this.film = detail;
        }
      });
  };

  reservation() {
    sessionStorage.setItem('filmTitle', JSON.stringify({title: this.film.title}));
    this.router.navigate(['reservation']);
  }

}
