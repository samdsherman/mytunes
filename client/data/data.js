// data.js - Defines an array of data regarding song files and their accompanying details.
var songData = [];
$.ajax({
  url: 'https://api.parse.com/1/classes/songs/',
  type: 'GET',
  contentType: 'application/json',
  success: function(data) {
    data.results.forEach(function(song) {
      songData.push(song);
    });
    init();
  }
});
var init = function() {
  $(function() {
  // set up model objects
    var library = new Songs(songData);
    var app = new AppModel({library: library});

    // build a view for the top level of the whole app
    var appView = new AppView({model: app});

    // put the view onto the screen
    $('body').append(appView.render());
  });
};
/* [
  {
    url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/04+One+In+A+Million.mp3',
    title: 'One In A Million',
    artist: 'Aaliyah',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/03+Age+Ain%27t+Nothing+But+A+Number.mp3',
    title: 'Age Ain\'t Nothing But A Number',
    artist: 'Aaliyah',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/05+Hot+Like+Fire.mp3',
    title: 'Hot Like Fire',
    artist: 'Aaliyah',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/06+If+Your+Girl+Only+Knew.mp3',
    title: 'If Your Girl Only Knew',
    artist: 'Aaliyah',
  }
]*/
