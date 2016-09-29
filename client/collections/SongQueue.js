// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function(song) {
      // console.log('inside songqueue ended');
      this.remove(song);
      if (this.length) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song) {
      console.log('dequeueing ' + song);
      this.remove(song);
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  }

});