var Qapp = Qapp || { Models: {}, Collections: {}, Views: {} };

Qapp.Models.Question = Backbone.Model.extend({
  url : '/questions',
  initialize: function(){
    this.set('answers', new AnswersCollection())
    console.log("You've created a new Question and Answers collection");
  },
  defaults:{
    user_id: '',
    content: '',
    option_1: '',
    option_2: '',
    range_min: '',
    range_max: ''
  }
})
