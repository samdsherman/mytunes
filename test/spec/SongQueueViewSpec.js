describe('SongQueueView', function() {
  var view, fakeSongs;

  beforeEach(function() {
    fakeSongs = new SongQueue([
      {
        artist: 'data',
        url: '/test/testsong.mp3',
        title: 'test song'
      },
      {
        artist: 'data',
        url: '/test/testsong2.mp3',
        title: 'test song 2'
      }
    ]);
  });

  it('creates SongQueueEntryViews for each queued song & renders them', function() {
    sinon.spy(SongQueueEntryView.prototype, 'render');
    view = new SongQueueView({collection: fakeSongs});
    view.render();
    expect(SongQueueEntryView.prototype.render).to.have.been.called;
  });

  it('renders when add or remove event fires from the song queue collection', function() {
    sinon.spy(SongQueueView.prototype, 'render');
    view = new SongQueueView({collection: fakeSongs});
    view.collection.add({
      artist: 'data',
      url: '/test/testsong3.mp3',
      title: 'test song 3'
    });
    view.collection.pop();
    expect(view.render).to.have.been.called;
  });

  it('removes song from queue when user clicks it', function() {
    view = new SongQueueView({collection: fakeSongs});
    view.render();
    var first = view.collection.at(0);
    expect(first).to.equal(view.collection.at(0));
    view.$el.find('tbody').children().first().click();
    expect(first).to.not.equal(view.collection.at(0));
  });
  
  it('should have a header', function() {
    var view = new SongQueueView({collection: fakeSongs});
    expect(view.$el.children()[0].tagName).to.equal('TH');
  });
});
