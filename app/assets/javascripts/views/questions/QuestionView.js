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
    // var listView = new Qapp.Views.AnswerListView({ collection: this.model.get('answers'), el: this.$el.find('.answers')
    // });
    // model = this.collection;
    // console.log("new render model", model);
    // $(".answer").on("click", function(){
    //   console.log("click function model", model);
    //   self.renderGraph(model);
    //   console.log("render answer click listener working");
    // })
    // listView.render();
    return this
  }

//    if (self.model.attributes.results.range_min === null && self.model.attributes.results.results[0] !== 0 && self.model.attributes.results.results[1] !== 0 && self.model.attributes.results.content !== "") {
//     this.addGraphOptions();
//     this.addGraphOptionAnswer();
//   } else if (self.model.attributes.results.option_1 === null && self.model.attributes.results.content !== "") {
//     this.addGraphOptions();
//     this.addGraphRangeAnswer();
//   } else if (self.model.attributes.results.results[0] === 0 && self.model.attributes.results.content !== "") {
//     var newElement = $("<h1 class='question_list'>").html("The question: <br>'" + self.model.attributes.results.content + "' <br>doesn't have any answers yet.<br> Be the first to answer!")
//     $('#container').html(newElement);
//   } else if (self.model.attributes.results.results[0][0] === 0 && self.model.attributes.results.content !== "") {
//     var newElement = $("<h1 class='question_list'>").html("The question: <br>'" + self.model.attributes.results.content + "' <br>doesn't have any answers yet.<br> Be the first to answer!")
//     $('#container').html(newElement);
//    } else {
//     questionsCollection.nextQuestion();
//     }

//   },

// addGraphOptions: function() {

//  //     * Grid-light theme for Highcharts JS
//  // * @author Torstein Honsi
//  // */

// // Load the fonts
// Highcharts.createElement('link', {
//    href: 'http://fonts.googleapis.com/css?family=Dosis:400,600',
//    rel: 'stylesheet',
//    type: 'text/css'
// }, null, document.getElementsByTagName('head')[0]);

// Highcharts.theme = {
//    colors: ["#7cb5ec", "#f7a35c", "#90ee7e", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
//       "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
//    chart: {
//       backgroundColor: null,
//       style: {
//          fontFamily: "Dosis, sans-serif"
//       }
//    },
//    title: {
//       style: {
//          fontSize: '16px',
//          fontWeight: 'bold',
//          textTransform: 'uppercase'
//       }
//    },
//    tooltip: {
//       borderWidth: 0,
//       backgroundColor: 'rgba(219,219,216,0.8)',
//       shadow: false
//    },
//    legend: {
//       itemStyle: {
//          fontWeight: 'bold',
//          fontSize: '13px'
//       }
//    },
//    xAxis: {
//       gridLineWidth: 0,
//       lineWidth: 0,
//       minorGridLineWidth: 0,
//    lineColor: 'transparent',
//       labels: {
//         enabled: false,
//          style: {
//             fontSize: '12px'
//          },
//          minorTickLength: 0,
//    tickLength: 0
//       }
//    },
//    yAxis: {
//       minorTickInterval: 'auto',
//       title: {
//          style: {
//             textTransform: 'uppercase'
//          }
//       },
//       labels: {
//          style: {
//             fontSize: '12px'
//          }
//       }
//    },
//    plotOptions: {
//       candlestick: {
//          lineColor: '#404048'
//       }
//    },


//    // General
//    background2: '#F0F0EA'

// };

// // Apply the theme
// Highcharts.setOptions(Highcharts.theme);

// }

// addGraphOptionAnswer: function() {
//         $('#container').highcharts({
//           chart: {
//               type: 'column'
//           },
//           title: {
//               text: self.model.attributes.content
//           },
//           xAxis: {
//               categories: [self.model.attributes.option_1, self.model.attributes.option_2]
//           },
//           yAxis: {
//               title: {
//                   text: 'Number of answers'
//               }
//           },
//           series: [{
//               name: self.model.attributes.option_1,
//               data: [self.model.attributes.results[0]]
//           }, {
//               name: self.model.attributes.option_2,
//               data: [self.model.attributes.results[1]]
//           }]
//       });

//     // Set up the chart
//     var chart = new Highcharts.Chart({
//         chart: {
//             renderTo: 'container',
//             type: 'column',
//             margin: 75,
//             options3d: {
//                 enabled: true,
//                 alpha: 15,
//                 beta: 15,
//                 depth: 50,
//                 viewDistance: 25
//             }
//         },
//         title: {
//             text: self.model.attributes.content
//         },
//         subtitle: {
//             text: ''
//         },
//         plotOptions: {
//             column: {
//                 depth: 25
//             }
//         },
//         series: [{
//                        name: self.model.attributes.option_1,
//               data: [self.model.attributes.results[0]]
//           }, {
//               name: self.model.attributes.option_2,
//               data: [self.model.attributes.results[1]]
//         }]

//     });

// }

// addGraphRangeAnswer: function() {

//     // Bubble chart:
//     $('#container').highcharts({

//       chart: {
//           type: 'bubble',
//           zoomType: 'xy'
//       },

//       title: {
//         text: self.model.attributes.content
//       },

//       series: [{
//           data: self.model.attributes.results
//       }]

//   });
//     console.log(self.model.attributes.results);
//         return this;
// }

  // }

})
