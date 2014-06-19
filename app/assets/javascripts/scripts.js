// ************ Model *************
function Question(questionJSON){
  this.userid = questionJSON.userid;
  this.content = questionJSON.content;
  this.option_1 = questionJSON.option_1;
  this.option_2 = questionJSON.option_2;
  this.range_min = questionJSON.range_min;
  this.range_max = questionJSON.range_max;
  this.id = questionJSON.id;
  this.something = "something";
  this.results = "default value";
  this.fetchAnswers();
  // this.results = [];
<<<<<<< HEAD
}

Question.prototype.addResults = function(resultsData){
  this.results.push(resultsData);
}

Question.prototype.fetchAnswers = function(){
  var self = this;
    $.ajax({
      url: '/questions/' + self.id,
      dataType: 'json',
      method: 'GET',
      async: false
    }).done(function(data){
      self.results = data;
      // self.addResults(data)
      console.log("this is the data from the ajax call for results", data);
      console.log(self.results)
    });
}

=======
}

Question.prototype.addResults = function(resultsData){
  this.results.push(resultsData);
}

Question.prototype.fetchAnswers = function(){
  var self = this;
    $.ajax({
      url: '/questions/' + self.id,
      dataType: 'json',
      method: 'GET',
      async: false
    }).done(function(data){
      self.results = data;
      // self.addResults(data)

    });
}

>>>>>>> master

// ************ View *************
function QuestionView(model){
  this.model = model;

<<<<<<< HEAD
=======
}

QuestionView.prototype.renderTrending = function(){
  $.each(this.model, function(i, element) {
  // var newElement = "<a href=''data-reveal-id='questModal'><div class='trend_quest " + element.id + "'>"
  //  + element.content +
  //  "<div class='element.option_1' value=''>" + element.option_1 +
  //  "</div></a></br>"
  // $("#actual_question").html(questionHTML);

  var questionTemplate = _.template($("#questionTemplate").text());
  var questionHTML = questionTemplate(element);
  // $("#actual_question").html(questionHTML);
  $("#trending").append(questionHTML);
  console.log("I'm in the renderTrending, and this is the model", element.content);
});

  // $("#actual_question").html(questionHTML);

>>>>>>> master
}

QuestionView.prototype.render = function(){

  console.log(this.model);
<<<<<<< HEAD
  var newElement = $("<h1 class='question_list'>").html(this.model.results[0]);
  $('.question-manager').html(newElement);
  this.addGraph();
  return this;
}

QuestionView.prototype.addGraph = function() {

        /**
 * Dark theme for Highcharts JS
 * @author Torstein Honsi
 */


Highcharts.createElement('link', {
   href: 'http://fonts.googleapis.com/css?family=Unica+One',
   rel: 'stylesheet',
   type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

Highcharts.theme = {
   colors: ["#2b908f", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
   chart: {
      backgroundColor: {
         linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
         stops: [
            [0, '#2a2a2b'],
            [1, '#3e3e40']
         ]
      },
      style: {
         fontFamily: "'Unica One', sans-serif"
      },
      plotBorderColor: '#606063'
   },
   title: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase',
         fontSize: '20px'
      }
   },
   subtitle: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase'
      }
   },
   xAxis: {
      gridLineColor: '#2a2a2b',
      labels: {
         style: {
            color: '#E0E0E3'
         }
      },
      lineColor: '#707073',
      minorGridLineColor: '#2a2a2b',
      tickColor: '#707073',
      title: {
         style: {
            color: '#A0A0A3'

         }
      }
   },
   yAxis: {
      gridLineColor: '#2a2a2b',
      labels: {
         style: {
            color: '#E0E0E3'
         }
      },
      lineColor: '#2a2a2b',
      minorGridLineColor: '#2a2a2b',
      tickColor: '#2a2a2b',
      tickWidth: 1,
      title: {
         style: {
            color: '#A0A0A3'
         }
      }
   },
   tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      style: {
         color: '#F0F0F0'
      }
   },
   plotOptions: {
      series: {
         dataLabels: {
            color: '#B0B0B3'
         },
         marker: {
            lineColor: '#2a2a2b'
         }
      },
      boxplot: {
         fillColor: '#505053'
      },
      candlestick: {
         lineColor: 'white'
      },
      errorbar: {
         color: 'white'
      }
   },
   legend: {
      itemStyle: {
         color: '#E0E0E3'
      },
      itemHoverStyle: {
         color: '#FFF'
      },
      itemHiddenStyle: {
         color: '#606063'
      }
   },
   credits: {
      style: {
         color: '#666'
      }
   },
   labels: {
      style: {
         color: '#707073'
      }
   },

   drilldown: {
      activeAxisLabelStyle: {
         color: '#F0F0F3'
      },
      activeDataLabelStyle: {
         color: '#F0F0F3'
      }
   },

   navigation: {
      buttonOptions: {
         symbolStroke: '#DDDDDD',
         theme: {
            fill: '#505053'
         }
      }
   },

   // scroll charts
   rangeSelector: {
      buttonTheme: {
         fill: '#505053',
         stroke: '#000000',
         style: {
            color: '#CCC'
         },
         states: {
            hover: {
               fill: '#707073',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            },
            select: {
               fill: '#000003',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            }
         }
      },
      inputBoxBorderColor: '#505053',
      inputStyle: {
         backgroundColor: '#333',
         color: 'silver'
      },
      labelStyle: {
         color: 'silver'
      }
   },

   navigator: {
      handles: {
         backgroundColor: '#666',
         borderColor: '#AAA'
      },
      outlineColor: '#CCC',
      maskFill: 'rgba(255,255,255,0.1)',
      series: {
         color: '#7798BF',
         lineColor: '#A6C7ED'
      },
      xAxis: {
         gridLineColor: '#2a2a2b'
      }
   },

   scrollbar: {
      barBackgroundColor: '#808083',
      barBorderColor: '#808083',
      buttonArrowColor: '#CCC',
      buttonBackgroundColor: '#606063',
      buttonBorderColor: '#606063',
      rifleColor: '#FFF',
      trackBackgroundColor: '#404043',
      trackBorderColor: '#404043'
   },

   // special colors for some of the
   legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
   background2: '#505053',
   dataLabelsColor: '#B0B0B3',
   textColor: '#C0C0C0',
   contrastTextColor: '#F0F0F3',
   maskColor: 'rgba(255,255,255,0.3)'
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);


=======
  console.log(this.model.results);
  // var newElement = $("<h1 class='question_list'>").html(this.model.results[0]);
  // $('.question-manager').html(newElement);
   if (this.model.range_min === null && this.model.results[0] !== 0 && this.model.results[1] !== 0 && this.model.content !== "") {
    this.addGraphOptions();
    this.addGraphOptionAnswer();
  } else if (this.model.option_1 === null && this.model.results[0][2] != 0 && this.model.content !== "") {
    this.addGraphOptions();
    this.addGraphRangeAnswer();
  } else if (this.model.results[0] === 0 && this.model.content !== "") {
    var newElement = $("<h1 class='question_list'>").html("The question: <br>'" + this.model.content + "' <br>doesn't have any answers yet.<br> Be the first to answer!")
    $('#container').html(newElement);
    // $('.question-manager').html(newElement);
  } else if (this.model.results[0][0] === 0 && this.model.content !== "") {
    var newElement = $("<h1 class='question_list'>").html("The question: <br>'" + this.model.content + "' <br>doesn't have any answers yet.<br> Be the first to answer!")
    $('#container').html(newElement);
    // $('.question-manager').html(newElement);
   } else {
    questionsCollection.nextQuestion();
    }

}

QuestionView.prototype.addGraphOptions = function() {

          /**
   * Dark theme for Highcharts JS
   * @author Torstein Honsi
   */


  Highcharts.createElement('link', {
     href: 'http://fonts.googleapis.com/css?family=Unica+One',
     rel: 'stylesheet',
     type: 'text/css'
  }, null, document.getElementsByTagName('head')[0]);

  Highcharts.theme = {
     colors: ["#2b908f", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
        "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
     chart: {
        backgroundColor: {
           linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
           stops: [
              [0, '#2a2a2b'],
              [1, '#3e3e40']
           ]
        },
        style: {
           fontFamily: "'Unica One', sans-serif"
        },
        plotBorderColor: '#606063'
     },
     title: {
        style: {
           color: '#E0E0E3',
           textTransform: 'uppercase',
           fontSize: '20px'
        }
     },
     subtitle: {
        style: {
           color: '#E0E0E3',
           textTransform: 'uppercase'
        }
     },
     xAxis: {
        gridLineColor: '#2a2a2b',
        labels: {
           style: {
              color: '#E0E0E3'
           }
        },
        lineColor: '#707073',
        minorGridLineColor: '#2a2a2b',
        tickColor: '#707073',
        title: {
           style: {
              color: '#A0A0A3'

           }
        }
     },
     yAxis: {
        gridLineColor: '#2a2a2b',
        labels: {
           style: {
              color: '#E0E0E3'
           }
        },
        lineColor: '#2a2a2b',
        minorGridLineColor: '#2a2a2b',
        tickColor: '#2a2a2b',
        tickWidth: 1,
        title: {
           style: {
              color: '#A0A0A3'
           }
        }
     },
     tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
           color: '#F0F0F0'
        }
     },
     plotOptions: {
        series: {
           dataLabels: {
              color: '#B0B0B3'
           },
           marker: {
              lineColor: '#2a2a2b'
           }
        },
        boxplot: {
           fillColor: '#505053'
        },
        candlestick: {
           lineColor: 'white'
        },
        errorbar: {
           color: 'white'
        }
     },
     legend: {
        itemStyle: {
           color: '#E0E0E3'
        },
        itemHoverStyle: {
           color: '#FFF'
        },
        itemHiddenStyle: {
           color: '#606063'
        }
     },
     credits: {
        style: {
           color: '#666'
        }
     },
     labels: {
        style: {
           color: '#707073'
        }
     },

     drilldown: {
        activeAxisLabelStyle: {
           color: '#F0F0F3'
        },
        activeDataLabelStyle: {
           color: '#F0F0F3'
        }
     },

     navigation: {
        buttonOptions: {
           symbolStroke: '#DDDDDD',
           theme: {
              fill: '#505053'
           }
        }
     },

     // scroll charts
     rangeSelector: {
        buttonTheme: {
           fill: '#505053',
           stroke: '#000000',
           style: {
              color: '#CCC'
           },
           states: {
              hover: {
                 fill: '#707073',
                 stroke: '#000000',
                 style: {
                    color: 'white'
                 }
              },
              select: {
                 fill: '#000003',
                 stroke: '#000000',
                 style: {
                    color: 'white'
                 }
              }
           }
        },
        inputBoxBorderColor: '#505053',
        inputStyle: {
           backgroundColor: '#333',
           color: 'silver'
        },
        labelStyle: {
           color: 'silver'
        }
     },

     navigator: {
        handles: {
           backgroundColor: '#666',
           borderColor: '#AAA'
        },
        outlineColor: '#CCC',
        maskFill: 'rgba(255,255,255,0.1)',
        series: {
           color: '#7798BF',
           lineColor: '#A6C7ED'
        },
        xAxis: {
           gridLineColor: '#2a2a2b'
        }
     },

     scrollbar: {
        barBackgroundColor: '#808083',
        barBorderColor: '#808083',
        buttonArrowColor: '#CCC',
        buttonBackgroundColor: '#606063',
        buttonBorderColor: '#606063',
        rifleColor: '#FFF',
        trackBackgroundColor: '#404043',
        trackBorderColor: '#404043'
     },

     // special colors for some of the
     legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
     background2: '#505053',
     dataLabelsColor: '#B0B0B3',
     textColor: '#C0C0C0',
     contrastTextColor: '#F0F0F3',
     maskColor: 'rgba(255,255,255,0.3)'
  };

  // // Apply the theme
  Highcharts.setOptions(Highcharts.theme);

}

QuestionView.prototype.addGraphOptionAnswer = function() {
>>>>>>> master
        $('#container').highcharts({
          chart: {
              type: 'column'
          },
          title: {
              text: this.model.content
          },
          xAxis: {
              categories: [this.model.option_1, this.model.option_2]
          },
          yAxis: {
              title: {
                  text: 'Number of answers'
              }
          },
          series: [{
              name: this.model.option_1,
              data: [this.model.results[0]]
          }, {
              name: this.model.option_2,
              data: [this.model.results[1]]
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
            text: this.model.content
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
                       name: this.model.option_1,
              data: [this.model.results[0]]
          }, {
              name: this.model.option_2,
              data: [this.model.results[1]]
        }]

    });
<<<<<<< HEAD
=======

}

QuestionView.prototype.addGraphRangeAnswer = function() {

    // Bubble chart:
    $('#container').highcharts({

      chart: {
          type: 'bubble',
          zoomType: 'xy'
      },

      title: {
        text: this.model.content
      },

      series: [{
          data: this.model.results
      }]

  });
    console.log(this.model.results);
>>>>>>> master
        return this;
}

// ************ Answers Collection *************

function AnswersCollection(){

}

AnswersCollection.prototype.create = function(paramObject){
  var self = this;
  $.ajax({
    url: '/answers',
    method: 'POST',
    dataType:'json',
    data: {answer: paramObject}
  }).done(function(data){
    console.log(data);

  });
}

var answersCollection = new AnswersCollection();



// ************ Questions Collection *************
function QuestionsCollection(){
  this.models = [];
  this.currentRecord = 0;
}

QuestionsCollection.prototype.appendListeners = function () {
  var self = this;
  $('.next').on('click', function(){
    self.nextQuestion();
  })
}

QuestionsCollection.prototype.add = function(questionJSON){
  newQuestion = new Question(questionJSON);
  this.models.push(newQuestion);
  $(this).trigger('trigg');
<<<<<<< HEAD
}



QuestionsCollection.prototype.renderCurrentQuestion = function() {
  var questionView = new QuestionView(this.models[this.currentRecord]);
  questionView.render();

=======
>>>>>>> master
}

QuestionsCollection.prototype.renderTrendingQuestions = function() {
  var questionView = new QuestionView(this.models);
  questionView.renderTrending();

}

// QuestionsCollection.prototype.renderCurrentQuestion = function() {
//   var questionView = new QuestionView(this.models[this.currentRecord]);
//   questionView.render();
// }

QuestionsCollection.prototype.nextQuestion = function () {
  var lengthArray = this.models.length;
  this.currentRecord++ ;
  console.log("this is the current record", this.currentRecord);
<<<<<<< HEAD
   if (this.currentRecord === lengthArray-1) {
=======
   if (this.currentRecord === lengthArray ) {
>>>>>>> master
    this.currentRecord = 0;
    this.fetch();
  };
  this.renderCurrentQuestion();
  console.log('working');
}

QuestionsCollection.prototype.create = function(paramObject){
  var self = this;
  $.ajax({
    url: '/questions',
    method: 'POST',
    dataType:'json',
    data: {question: paramObject}
  }).done(function(data){
    console.log(data);
    self.add(data);

  });
}


QuestionsCollection.prototype.fetch = function(){
  var self = this;
    $.ajax({
      url: '/questions',
      dataType: 'json',
      method: 'GET'
    }).done(function(data){
      for(id in data){
      self.add(data[id]);
      }
      self.displayEntireCollection()

    });
}

<<<<<<< HEAD

=======
QuestionsCollection.prototype.appendListenersToAnswers = function(){
  $(".question_option_1").on("click", function(){
    var self = this;
    console.log(self.textContent);
    console.log($('.question_option_1').parent().attr('id'));

    });

    $('.answer_form').on('submit', function(e){
      var self = this;
    console.log(e);
    e.preventDefault();
    var newAnswerInput = $(this).serializeArray();
    // console.log($('input[name=radioName]:checked', '#answer_form').val());

    console.log({question_id: $('#answer_form').parent().attr('id'), user_id: newAnswerInput[2].value, option_answer: newAnswerInput[0].value, comment: newAnswerInput[1].value});
    answersCollection.create({question_id: $('#answer_form').parent().attr('id'), user_id: newAnswerInput[2].value, option_answer: newAnswerInput[0].value, comment: newAnswerInput[1].value});
//     AnswersCollection.create({question_id: $('.question_option_1').parent().attr('id'), user_id: newAnswerInput[3].value, option_answer: $('input[name=radioName]:checked', '#answer_form').val(), comment: newAnswerInput[2].value});

      resetForm($('#answer_form'));
  });

    // AnswersCollection.create({question_id: $('.question_option_1').parent().attr('id'), user_id: current_user, option_answer: $(".question_option_1").textContent, comment: text, submit})

}
>>>>>>> master


QuestionsCollection.prototype.displayEntireCollection = function(){
    $('.questions').empty();
      // this.renderCurrentQuestion();
      this.renderTrendingQuestions();
      this.appendListenersToAnswers();
  }

function resetForm($form) {
    $form.find('input:text, input:password, input:file, select, textarea').val('');
    $form.find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');
}

var questionsCollection = new QuestionsCollection();


$(function(){

<<<<<<< HEAD
=======


>>>>>>> master
  questionsCollection.appendListeners();

  questionsCollection.fetch();

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }


  // $(questionsCollection).on('trigg', function(){
  //   displayEntireCollection();
  // })


  $('#question_form').on('submit', function(e){
    console.log(e);
    e.preventDefault();
    var newQuestionInput = $(this).serializeArray();
    console.log({content: newQuestionInput[0].value, option_1: newQuestionInput[1].value, option_2: newQuestionInput[2].value, user_id: newQuestionInput[3].value});
    questionsCollection.create({content: newQuestionInput[0].value, option_1: newQuestionInput[1].value, option_2: newQuestionInput[2].value, user_id: newQuestionInput[3].value});

      resetForm($('#question_form'));
  });

  $('#question_form_this').on('submit', function(e){
    console.log(e);
    e.preventDefault();
    var newQuestionInput = $(this).serializeArray();
    console.log({content: newQuestionInput[0].value, option_1: newQuestionInput[1].value, option_2: newQuestionInput[2].value, user_id: newQuestionInput[3].value});
    questionsCollection.create({content: newQuestionInput[0].value, option_1: newQuestionInput[1].value, option_2: newQuestionInput[2].value, user_id: newQuestionInput[3].value});

      resetForm($('#question_form_this'));
  });

  $('#question_form_rank').on('submit', function(e){
    console.log(e);
    e.preventDefault();
    var newQuestionInput = $(this).serializeArray();
    console.log({content: newQuestionInput[0].value, range_min: newQuestionInput[1].value, range_max: newQuestionInput[2].value, user_id: newQuestionInput[3].value});
    questionsCollection.create({content: newQuestionInput[0].value, option_1: newQuestionInput[1].value, option_2: newQuestionInput[2].value, user_id: newQuestionInput[3].value});

      resetForm($('#question_form_rank'));
  });
  $('.question-manager').on('click', 'div', function(){

    $(this).children(".question_display").slideToggle();

  })
<<<<<<< HEAD
=======

  // $('#question_option_1').on('click', function(){
  //   console.log("i work");
  // })


// // REFERENCE
//   $('.question-manager').on('click', 'div', function(){
//     // alert($(this).children(".question_options").text());
//     // alert("I'm question content. I work");
//     // $(this).children(".question_options").slideToggle();
//     $(this).children(".question_display").slideToggle();
//     // $(".question_options").slideToggle();
//   })

//   // $('.question-manager').each(function(){
//   //   var thisLink = $(this).children('h4');
//   //   thisLink.click(function(){
//   //     alert("I'm question content. I work");
//   //     $(".question_options").slideToggle();
//   //   });
//   // });

//   $('.question-manager').on('click', '.question_option_1', function(){
//     alert("I'm option 1. I work");
//   })

//   $('.question-manager').on('click', '.question_option_2', function(){
//     alert("I'm option 2. I work");
//   })



>>>>>>> master
});
