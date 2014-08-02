var Qapp = Qapp || { Models: {}, Collections: {}, Views: {} };

Qapp.Views.QuestionView = Backbone.View.extend({
  initialize: function(){
    console.log("You've created a Question View");
  },
  // $pepe: (".answer"),
  tagName: "div",
  template: _.template( $("#questionTemplate").html() ),
  questionAnswerTemplate: _.template( $(".questionAnswerTemplate").html() ),
  events: {
    // Not sure yet what we'll put here
    // 'click $pepe' : 'renderGraph'
  },
  render: function(){
    self = this;
    this.$el.html( this.template(this.model.attributes) );
    return this
  },
  //Upon click of the "Answer" button, renderQuestionAnswer will launch a modal showing each question, with a next button to go from one to the other
  renderQuestionAnswer: function() {
    self = this;
    this.$el.html( this.questionAnswerTemplate(this.model.attributes) )
    return this
  }

})
