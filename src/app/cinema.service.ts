import {Injectable} from '@angular/core';

@Injectable()
export class CinemaService {

  constructor() {
  }


  getViewDetails() {
    return [
      {
        title: 'Security',
        url: '../../assets/images/detail-img1.jpeg',
        director: 'Mr. Lorem Ipsum',
        premiere: 1402023146292
      },
      {
        title: 'Critica - Fifty Shades Darker',
        url: '../../assets/images/detail-img2.jpeg',
        director: 'Mr. Lorem Ipsum',
        premiere: 1301023146292
      },
      {
        title: 'Estreias Da Semana',
        url: '../../assets/images/detail-img3.jpeg',
        director: 'Mr. Lorem Ipsum', premiere: 1402023146292
      },
      {
        title: 'Amy of one',
        url: '../../assets/images/detail-img4.jpeg',
        director: 'Mr. Lorem Ipsum',
        premiere: 1401523146292
      },
      {
        title: 'Nova papel de alec baldwin',
        url: '../../assets/images/detail-img5.jpeg',
        director: 'Mr. Lorem Ipsum',
        premiere: 1320023146292
      },
      {
        title: 'SpiderMan',
        url: '../../assets/images/detail-img6.jpeg',
        director: 'Mr. Lorem Ipsum',
        premiere: 1400023146292
      },
      {
        title: 'Welcome to the jungle',
        url: '../../assets/images/detail-img7.jpeg',
        director: 'Mr. Lorem Ipsum',
        premiere: 1401823146292
      },
      {
        title: 'Polaroid',
        url: '../../assets/images/detail-img8.jpeg',
        director: 'Mr. Lorem Ipsum',
        premiere: 1401005146292
      }
    ];
  }

  getCinemas() {
    return [
      {name: 'Cineworld', url: 'https://en.wikipedia.org/wiki/Cineworld'},
      {name: 'Curzon Cinemas', url: 'https://en.wikipedia.org/wiki/Curzon_Cinemas'},
      {name: 'Curzon Home Cinema', url: 'https://en.wikipedia.org/wiki/Curzon_Home_Cinema'},
      {name: 'Vue Cinemas', url: 'https://en.wikipedia.org/wiki/Vue_Cinemas'},
      {name: 'Showcase Cinemas', url: 'https://en.wikipedia.org/wiki/Showcase_Cinemas'},
      {name: 'Reel Cinemas, UK', url: 'https://en.wikipedia.org/wiki/Reel_Cinemas,_UK'},
      {name: 'The Light Cinemas', url: 'https://en.wikipedia.org/wiki/The_Light_Cinemas'},
      {name: 'Everyman Cinemas', url: 'https://en.wikipedia.org/wiki/Everyman_Cinemas'},
      {name: 'Cineworld', url: 'https://en.wikipedia.org/wiki/Cineworld'},
      {name: 'Merlin Cinemas', url: 'https://en.wikipedia.org/wiki/Merlin_Cinemas'},
    ];
  }
}
