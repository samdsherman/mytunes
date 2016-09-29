// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.reset();
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      type: 'GET',
      contentType: 'application/json',
      success: (data) => {
        data.results.forEach((song) => {
          this.add(song);
        });
        this.trigger('fetchComplete');
      }
    });
  },

  fetchByTitle: function(title) {
    this.reset();
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      type: 'GET',
      data: {where: {title: title}},
      contentType: 'application/json',
      success: (data) => {
        console.log($('input').val());
        data.results.forEach((song) => {
          this.add(song);
        });
        this.trigger('fetchComplete');
      }
    });
  }

});