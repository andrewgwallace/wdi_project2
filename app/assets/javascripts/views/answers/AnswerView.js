var Qapp = Qapp || { Models: {}, Collections: {}, Views: {} };

Qapp.Views.AnswerView = Backbone.View.extend({
  initialize: function(){
  },
  tagName: 'div',
  // template: _.template($('answerGraphTemplate').html()),
  render: function(){
    console.log("AnswerView being hit");
    console.log("answerView model", this.model);
    // this.$el.empty();
    // this.$el.html(this.template(this.model.attributes));
    var self = this;
    // this.$el.html( this.template(this.model.attributes) );
    console.log("renderGraph self", self);
    $.ajax({
        url: '/questions/' + this.model.attributes.id,
        dataType: 'json',
        method: 'GET',
        async: false
      }).done(function(data){
        self.model.attributes.results = data;
        console.log("rendergraph data success", data);
        console.log("question self in answer renderGraph", self);

        // self.addResults(data)
    });

    // $('#container').html(self.model.attributes.results);

     function addGraphOptions() {

     //     * Grid-light theme for Highcharts JS
     // * @author Torstein Honsi
     // */

    // Load the fonts
    Highcharts.createElement('link', {
       href: 'http://fonts.googleapis.com/css?family=Dosis:400,600',
       rel: 'stylesheet',
       type: 'text/css'
    }, null, document.getElementsByTagName('head')[0]);

    Highcharts.theme = {
       colors: ["#7cb5ec", "#f7a35c", "#90ee7e", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
          "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
       chart: {
          backgroundColor: null,
          style: {
             fontFamily: "Dosis, sans-serif"
          }
       },
       title: {
          style: {
             fontSize: '16px',
             fontWeight: 'bold',
             textTransform: 'uppercase'
          }
       },
       tooltip: {
          borderWidth: 0,
          backgroundColor: 'rgba(219,219,216,0.8)',
          shadow: false
       },
       legend: {
          itemStyle: {
             fontWeight: 'bold',
             fontSize: '13px'
          }
       },
       xAxis: {
          gridLineWidth: 0,
          lineWidth: 0,
          minorGridLineWidth: 0,
       lineColor: 'transparent',
          labels: {
            enabled: false,
             style: {
                fontSize: '12px'
             },
             minorTickLength: 0,
       tickLength: 0
          }
       },
       yAxis: {
          minorTickInterval: 'auto',
          title: {
             style: {
                textTransform: 'uppercase'
             }
          },
          labels: {
             style: {
                fontSize: '12px'
             }
          }
       },
       plotOptions: {
          candlestick: {
             lineColor: '#404048'
          }
       },


       // General
       background2: '#F0F0EA'

    };

    // Apply the theme
    Highcharts.setOptions(Highcharts.theme);

    }

    function addGraphOptionAnswer() {
            $('#container').highcharts({
              chart: {
                  type: 'column'
              },
              title: {
                  text: self.model.attributes.content
              },
              xAxis: {
                  categories: [self.model.attributes.option_1, self.model.attributes.option_2]
              },
              yAxis: {
                  title: {
                      text: 'Number of answers'
                  }
              },
              series: [{
                  name: self.model.attributes.option_1,
                  data: [self.model.attributes.results[0]]
              }, {
                  name: self.model.attributes.option_2,
                  data: [self.model.attributes.results[1]]
              }]
          });

        // Set up the chart
        var chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container',
                type: 'column',
                margin: 75,
                options3d: {
                    enabled: true,
                    alpha: 15,
                    beta: 15,
                    depth: 50,
                    viewDistance: 25
                }
            },
            title: {
                text: self.model.attributes.content
            },
            subtitle: {
                text: ''
            },
            plotOptions: {
                column: {
                    depth: 25
                }
            },
            series: [{
                           name: self.model.attributes.option_1,
                  data: [self.model.attributes.results[0]]
              }, {
                  name: self.model.attributes.option_2,
                  data: [self.model.attributes.results[1]]
            }]

        });

    }

    function addGraphRangeAnswer() {

        // Bubble chart:
        $('#container').highcharts({

          chart: {
              type: 'bubble',
              zoomType: 'xy'
          },

          title: {
            text: self.model.attributes.content
          },

          series: [{
              data: self.model.attributes.results
          }]

      });
        console.log(self.model.attributes.results);
            // return this;
    }

  //  if (self.model.attributes.results.range_min === null && self.model.attributes.results.results[0] !== 0 && self.model.attributes.results.results[1] !== 0 && self.model.attributes.results.content !== "") {
  //   this.addGraphOptions();
  //   this.addGraphOptionAnswer();
  // } else if (self.model.attributes.results.option_1 === null && self.model.attributes.results.content !== "") {
  //   this.addGraphOptions();
  //   this.addGraphRangeAnswer();
  // } else if (self.model.attributes.results.results[0] === 0 && self.model.attributes.results.content !== "") {
  //   var newElement = $("<h1 class='question_list'>").html("The question: <br>'" + self.model.attributes.results.content + "' <br>doesn't have any answers yet.<br> Be the first to answer!")
  //   $('#container').html(newElement);
  // } else if (self.model.attributes.results.results[0][0] === 0 && self.model.attributes.results.content !== "") {
  //   var newElement = $("<h1 class='question_list'>").html("The question: <br>'" + self.model.attributes.results.content + "' <br>doesn't have any answers yet.<br> Be the first to answer!")
  //   $('#container').html(newElement);
  //  } else {
  //   questionsCollection.nextQuestion();
  //   }

    addGraphOptions();
    addGraphOptionAnswer();
    return this;
  }
});
