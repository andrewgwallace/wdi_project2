var Qapp = Qapp || { Models: {}, Collections: {}, Views: {} };

Qapp.Views.QuestionListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo( this.collection, "add", this.render );
  },
    render: function(){
      var self = this;
      setTimeout(function(){
        console.log("question list view el", this.$el);
        self.$el.empty();
        _.each( self.collection.models, function(question){
          var questionView = new Qapp.Views.QuestionView( {model: question} )
          self.$el.prepend( questionView.render().el );
       });
      }, 100)
    }
})
