var Qapp = Qapp || { Models: {}, Collections: {}, Views: {} };

Qapp.Collections.AnswerCollection = Backbone.Collection.extend({
  model: Qapp.Models.Answer,
  url: '/answers'
});
