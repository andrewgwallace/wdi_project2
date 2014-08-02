var Qapp = Qapp || { Models: {}, Collections: {}, Views: {} };

Qapp.Views.QuestionListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo( this.collection, "add", this.render );
  },
    render: function(){
      var self = this;
      setTimeout(function(){
        console.log("question list view el", self.$el);
        self.$el.empty();
        _.each( self.collection.models, function(question){
          var questionView = new Qapp.Views.QuestionView( {model: question} )
          self.$el.prepend( questionView.render().el );
       });
      }, 800)
    },
    // An attempt to render the graphs by passing the question models to the answerView. We'll then retrieve the results for each
    // question with an Ajax call to the Questions controller.
    renderGraphs: function() {
      var self = this;
      console.log("renderGraphs in the Question List View is being hit");
      console.log("questionListView renderGraphs $el", self.$el);
      self.$el.empty();
      _.each( self.collection.models, function(question) {
        var answerView = new Qapp.Views.AnswerView( {model: question} )
        self.$el.prepend( answerView.renderResults().el );
      } )
    },
    // The following function will render the questions from the "answer" button. I'll next have to create a function within the questionView to render the models.
    renderQuestionAnswer: function() {
      var self = this;
      console.log("renderQuestionAnswer in the Question List View is being hit");
      console.log("renderQuestionAnswer $el", self.$el);
      self.$el.empty();
      _.each( self.collection.models, function(question) {
        var questionAnswerView = new Qapp.Views.QuestionView( {model: question} )
        self.$el.prepend( questionAnswerView.renderQuestionAnswer().el );
      } )
    }
})
