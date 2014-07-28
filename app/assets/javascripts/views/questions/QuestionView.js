var Qapp = Qapp || { Models: {}, Collections: {}, Views: {} };

Qapp.Views.QuestionView = Backbone.View.extend({
  initialize: function(){
    console.log("You've created a Question View");
  },
  tagName: "li",
  template: _.template( $("#questionTemplate").html() ),
  events: {
    // Not sure yet what we'll put here

  },
  render: function(){
    this.$el.html( this.template(this.model.attributes) );
    var listView = new BookListView({ collection: this.model.get('books'), el: this.$el.find('.books')
    });
    listView.render();
    return this
  }
})
