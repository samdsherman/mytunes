// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      type: 'GET',
      contentType: 'application/json',
      success: (data) => {
        data.results.forEach((song) => {
          this.add(song);
        });
      }
    });
  }

});