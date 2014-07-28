var Qapp = Qapp || { Models: {}, Collections: {}, Views: {} };

Qapp.Views.QuestionListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo( this.collection, "add", this.render );
  },
    render: function(){
      console.log("question list view el", this.$el);
      var self = this;
      this.$el.empty();
      _.each( this.collection.models, function(question){
        var questionView = new Qapp.Views.QuestionView( {model: question} )
        self.$el.prepend( questionView.render().el );
      })
    }
})
