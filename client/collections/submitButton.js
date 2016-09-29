var SubmitButton = Backbone.Collection.extend({
  
  model: SongModel,

  initialize: function() {
    console.log(arguments);
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      type: 'GET',
      data: {where: {'title': ''}},
      contentType: 'application/json',
      success: (data) => {

        data.results.forEach((song) => {
          this.add(song);
        });
        this.trigger('fetchComplete');
      }
    });


  }

});