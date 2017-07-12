import { CinemaPortalPage } from './app.po';

describe('cinema-portal App', function() {
  let page: CinemaPortalPage;

  beforeEach(() => {
    page = new CinemaPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
