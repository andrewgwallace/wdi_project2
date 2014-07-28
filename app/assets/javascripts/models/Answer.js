var Qapp = Qapp || { Models: {}, Collections: {}, Views: {} };

Qapp.Models.Answer = Backbone.Model.extend({
  initialize: function(){
    console.log("Answer");
  },
  defaults: {
    user_id: "",
    question_id: "",
    range_answer: "",
    option_answer: "",
    comment: ""
  }
})
