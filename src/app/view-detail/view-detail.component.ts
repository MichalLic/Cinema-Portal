import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {CinemaService} from '../cinema.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss']
})
export class ViewDetailComponent implements OnInit {
view;
  constructor(private route: ActivatedRoute,
              private cinemaService: CinemaService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.getDetail(params);
      });
  }

  getDetail(params) {
    this.cinemaService.getViewDetails()
      .map((detail) => {
        if (params.name === detail.title) {
          console.log(detail);
          this.view = detail;
        }
      });
  };

}
