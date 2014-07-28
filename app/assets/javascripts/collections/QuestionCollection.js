var Qapp = Qapp || { Models: {}, Collections: {}, Views: {} };

Qapp.Collections.QuestionCollection = Backbone.Collection.extend({
  model: Qapp.Models.Question,
  url: '/questions'
});
