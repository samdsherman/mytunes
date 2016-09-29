// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.$input = $('<br><input type="text">');
    this.$button = $('<button>Submit</button>');
    this.$refresh = $('<button>Reset Songs</button>');
    this.$button.on('click', () => {
      var input = $('input').val();
      console.log(input);
      this.libraryView.collection.fetchByTitle(input);
      $('input').val('');
    
    });

    this.$refresh.on('click', () => {
      console.log('in refresh handler');
      this.libraryView.collection.initialize();
    });
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
      this.songQueueView.render();
    }, this);

    this.playerView.$el.on('ended', (event) => {
      var queue = this.model.get('songQueue');
      queue.at(0).ended();
    });

  },

  render: function() {
    return this.$el.html([
      this.playerView.$el,
      this.$input,
      this.$button,
      this.$refresh,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }
  

});
