// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('enqueue', function() {
      
    }, this);

    this.on('ended', function(song) {
      this.remove(song);
      if (this.length) {
        this.playFirst();
      } else {
        this.trigger('empty');
      }
    }, this);

    this.on('dequeue', function(song) {
      song.ended();
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  }

});