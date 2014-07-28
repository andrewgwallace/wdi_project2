var Qapp = Qapp || { Models: {}, Collections: {}, Views: {} };

Qapp.Views.QuestionView = Backbone.View.extend({
  initialize: function(){
    console.log("You've created a Question View");
  },
  tagName: "div",
  template: _.template( $("#questionTemplate").html() ),
  events: {
    // Not sure yet what we'll put here
  },
  render: function(){
    this.$el.html( this.template(this.model.attributes) );
    // var listView = new Qapp.Views.AnswerListView({ collection: this.model.get('answers'), el: this.$el.find('.answers')
    // });
    // listView.render();
    return this
  }
})
