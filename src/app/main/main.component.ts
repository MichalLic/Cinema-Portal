import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    console.log(this.viewImg);
  }

  viewImg = [
    {url: '../../assets/images/detail-img1.jpeg'},
    {url: '../../assets/images/detail-img2.jpeg'},
    {url: '../../assets/images/detail-img3.jpeg'},
    {url: '../../assets/images/detail-img4.jpeg'},
    {url: '../../assets/images/detail-img5.jpeg'},
    {url: '../../assets/images/detail-img6.jpeg'},
    {url: '../../assets/images/detail-img7.jpeg'},
    {url: '../../assets/images/detail-img8.jpeg'}
  ];
}
