// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.playerView.$el.on('ended', (event) => {
      console.log('inside appview ended handler');
      // this.playerView.setSong(model.get('currentSong'));
      var queue = this.model.get('songQueue');
      queue.at(0).ended();
    });
  },

  render: function() {
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el
    ]);
  }

});
