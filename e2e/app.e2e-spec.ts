import { HelloworldappPage } from './app.po';

describe('helloworldapp App', () => {
  let page: HelloworldappPage;

  beforeEach(() => {
    page = new HelloworldappPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
