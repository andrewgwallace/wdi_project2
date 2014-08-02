var Qapp = Qapp || { Models: {}, Collections: {}, Views: {} };

Qapp.Views.QuestionView = Backbone.View.extend({
  initialize: function(){
    console.log("You've created a Question View");
  },
  // $pepe: (".answer"),
  tagName: "div",
  template: _.template( $("#questionTemplate").html() ),
  events: {
    // Not sure yet what we'll put here
    // 'click $pepe' : 'renderGraph'
  },
    renderGraph: function(model){
      console.log("rendergragh working");
      var self = this;
      console.log("renderGraph self", self);
        $.ajax({
          url: '/questions/' + model.attributes.id,
          dataType: 'json',
          method: 'GET',
          async: false
        }).done(function(data){
          self.results = data;
          console.log("rendergraph data success", data);
          // self.addResults(data)
      });
    },
  render: function(){
    self = this;
    this.$el.html( this.template(this.model.attributes) );
    return this
  }

})
