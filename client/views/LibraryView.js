// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();

    this.collection.on('fetchComplete', () => {
      this.render();
    });

    this.collection.on('play', (song) => {
      // console.log('inside libraryview play');
      // console.log(song.timesPlayed);
      this.render();

    });
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    // console.log(this.collection);
    this.$el.children().detach();
    this.$el.html('<th>Library</th>').append(
      this.collection.map(function(song, i) {
        // console.log(song);
        if (song.attributes.artist === undefined) { return; }
        return new LibraryEntryView({model: song}).render();
      })
    );

  }

});
