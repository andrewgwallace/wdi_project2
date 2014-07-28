var Qapp = Qapp || { Models: {}, Collections: {}, Views: {} };

Qapp.Views.MapListView = Backbone.View.extend({
  initialize = function(){
    this.listenTo( this.collection, "add", this.render );
  },
    render: function(){
      var self = this;
      _.each( this.collection.models, function(question){
        var questionView = new Qapp.Views.QuestionView( {model: question} )
        el.prepend( questionView.render().el );
      })
    }
})
