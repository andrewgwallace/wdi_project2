var Qapp = Qapp || { Models: {}, Collections: {}, Views: {} };

Qapp.Views.AnswerListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'add', this.render);
  },
  render: function(){
    this.$el.empty();
    var self = this;
    _.each(self.collection.models, function(answer){
      var answerView = new Qapp.Views.AnswerView({ model: answer });
      self.$el.append( answerView.render().el )
    })
    return this
  }
});
