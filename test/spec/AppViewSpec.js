describe('AppView', function() {
  var appView, app;

  beforeEach(function () {
    app = new AppModel({library:
      new Songs([
        {
          artist: 'Fakey McFakerson',
          title: 'Never Gonna Mock You Up',
          url: 'example/url',
          artwork_url: ''
        },
        {
          artist: 'BittyBacon',
          title: 'Sizzle Sundays',
          url: 'fake/url',
          artwork_url: ''
        }
      ])
    });
    appView = new AppView({model: app});
  });

  it('should generate a PlayerView when created', function() {
    expect(appView.playerView).to.be.an.instanceof(PlayerView);
  });

  describe('when the currently playing song changes', function() {
    it('updates current song in playerView', function() {
      var song = app.get('library').at(0);
      expect(appView.playerView.model).to.not.equal(song);
      song.play();
      expect(appView.playerView.model).to.equal(song);
    });

    it('blanks out playerView if there are no more songs', function() {
      var song = app.get('library').at(0);
      song.enqueue();
      song.dequeue();
      expect(null).to.equal(appView.playerView.model);

    });
  });

});
