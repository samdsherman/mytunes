// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>Played: <span><%= count %></span> times -- </td><td>(<%= artist %>)</td><td><%= title %></td><td><img src="<%= artwork_url %>"></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function() {
    this.model.attributes.count = this.model.timesPlayed;
    // console.log(this.template('span'));
    console.log(this.model.attributes);
    return this.$el.html(this.template(this.model.attributes));

  }

});
