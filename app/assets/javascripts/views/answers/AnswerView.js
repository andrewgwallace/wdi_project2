var Qapp = Qapp || { Models: {}, Collections: {}, Views: {} };

Qapp.Views.AnswerView = Backbone.View.extend({
  initialize: function(){
  },
  tagName: 'li',
  template: _.template($('#questionAnswerTemplate').html()),
  render: function(){
    this.$el.empty();
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
