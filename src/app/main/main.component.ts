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
    {title: 'Security', url: '../../assets/images/detail-img1.jpeg'},
    {title: 'Critica - Fifty Shades Darker', url: '../../assets/images/detail-img2.jpeg'},
    {title: 'Estreias Da Semana', url: '../../assets/images/detail-img3.jpeg'},
    {title: 'Amy of one', url: '../../assets/images/detail-img4.jpeg'},
    {title: 'Nova papel de alec baldwin', url: '../../assets/images/detail-img5.jpeg'},
    {title: 'SpiderMan', url: '../../assets/images/detail-img6.jpeg'},
    {title: 'Welcome to the jungle', url: '../../assets/images/detail-img7.jpeg'},
    {title: 'Polaroid', url: '../../assets/images/detail-img8.jpeg'}
  ];
}
