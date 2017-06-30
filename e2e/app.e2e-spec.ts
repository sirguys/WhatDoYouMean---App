import { WhatDoYouMeanPage } from './app.po';

describe('what-do-you-mean App', () => {
  let page: WhatDoYouMeanPage;

  beforeEach(() => {
    page = new WhatDoYouMeanPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
