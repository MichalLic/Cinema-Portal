import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  navs = [
    {name: 'News', id: 'news', exact: true},
    {name: 'Ours cinemas', id: 'cinemas', exact: true},
    {name: 'Reservation', id: 'reservation', exact: true}
  ];
}
