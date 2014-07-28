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


// ************ View *************
function QuestionView(model){
  this.model = model;

}

QuestionView.prototype.render = function(){

  console.log(this.model);
  console.log(this.model.results);

   if (this.model.range_min === null && this.model.results[0] !== 0 && this.model.results[1] !== 0 && this.model.content !== "") {
    this.addGraphOptions();
    this.addGraphOptionAnswer();
  } else if (this.model.option_1 === null && this.model.content !== "") {
    this.addGraphOptions();
    this.addGraphRangeAnswer();
  } else if (this.model.results[0] === 0 && this.model.content !== "") {
    var newElement = $("<h1 class='question_list'>").html("The question: <br>'" + this.model.content + "' <br>doesn't have any answers yet.<br> Be the first to answer!")
    $('#container').html(newElement);
  } else if (this.model.results[0][0] === 0 && this.model.content !== "") {
    var newElement = $("<h1 class='question_list'>").html("The question: <br>'" + this.model.content + "' <br>doesn't have any answers yet.<br> Be the first to answer!")
    $('#container').html(newElement);
   } else {
    questionsCollection.nextQuestion();
    }

}

QuestionView.prototype.addGraphOptions = function() {

          /**
 * Grid-light theme for Highcharts JS
 * @author Torstein Honsi
 */

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

QuestionView.prototype.addGraphOptionAnswer = function() {
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
        return this;
}

// ************ Answer View *************
function AnswerView(models) {
console.log(models);
  this.models = models;
}

AnswerView.prototype.renderTrending = function(){
  $.each(this.models, function(i, element) {
  var questionTemplate = _.template($("#questionTemplate").text());
  var questionHTML = questionTemplate(element);
  $("#trending").prepend(questionHTML);
  console.log("I'm in the renderTrending, and this is the model", element.content);
});

}

// ****NEW**** This will create an answer view that appends to the new div.
// The model we're passing to this view is the same "currentQuestion" that we're using for
// the graphs, so at the moment we're having the Questions Collection do double-duty
//  as both what users can answer, and the results they're seeing.

// ************ Answer Button View *************
function AnswerButtonView(model) {
console.log("this is the answerButtonView, and I'm a model", model);
  this.model = model;
}

// ****NEW**** This will append the new "questionAnswerTemplate" template to the new modal "answerModal." RENAME MORE SEMANTICALLY
AnswerButtonView.prototype.renderAsk = function(){

  $("#answer_container").empty();
  var questionTemplate = _.template($("#questionAnswerTemplate").text());
  var questionHTML = questionTemplate(this.model);
  $("#answer_container").html(questionHTML);
  console.log("I'm in the renderAsk, and this is the model's content", this.model.content);

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
}

// ****NEW**** This will pass the "current question" from the questions collection to the
// new AnswerButtonView. We then "render" the template to the modal with the current question's
// answers.
QuestionsCollection.prototype.renderAskQuestions = function() {
  var answerButtonView = new AnswerButtonView(this.models[this.currentRecord])
  answerButtonView.renderAsk();
}

QuestionsCollection.prototype.renderTrendingQuestions = function() {
  var answerView = new AnswerView(this.models);
  answerView.renderTrending();
}

QuestionsCollection.prototype.renderCurrentQuestion = function() {
  var questionView = new QuestionView(this.models[this.currentRecord]);
  questionView.render();
}


QuestionsCollection.prototype.nextQuestion = function () {
  var lengthArray = this.models.length;
  this.currentRecord++ ;
  console.log("this is the current record", this.currentRecord);
   if (this.currentRecord === lengthArray ) {
    this.currentRecord = 0;
    this.fetch();
  };
  this.renderCurrentQuestion();
// ****NEW**** this.renderAskQuestions(): will add each answer to the new questionAnswer template
  this.renderAskQuestions();
  this.renderTrendingQuestions();
  console.log(' Next Question is being called and is working');
  console.log(this.currentRecord);
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

QuestionsCollection.prototype.appendListenersToAnswers = function(){
  $(".question_option_1").on("click", function(){
    var self = this;
    console.log(self.textContent);
    console.log($('.question_option_1').parent().attr('id'));

    });

    $('.answer_form').on('submit', function(e){
// **** NEWER **** No idea why the e.preventDefault isn't working here.
    var self = this;
    console.log(e);
    e.preventDefault();
    var newAnswerInput = $(this).serializeArray();


    if ( $("#useless").attr("class") !== "" ){

    console.log({question_id: $('.answer_form').parent().attr('id'), user_id: newAnswerInput[2].value, option_answer: newAnswerInput[0].value, comment: newAnswerInput[1].value});
    answersCollection.create({question_id: $('.answer_form').parent().attr('id'), user_id: newAnswerInput[2].value, option_answer: newAnswerInput[0].value, comment: newAnswerInput[1].value});
    }
    else {

     console.log({question_id: $('.answer_form').parent().attr('id'), user_id: newAnswerInput[2].value, range_answer: newAnswerInput[0].value, comment: newAnswerInput[1].value});
    answersCollection.create({question_id: $('.answer_form').parent().attr('id'), user_id: newAnswerInput[2].value, range_answer: newAnswerInput[0].value, comment: newAnswerInput[1].value});
  }
// **** NEWER **** This will fix the reset form, as well as the nexQuestion issue.
      resetForm($(self));
      questionsCollection.nextQuestion();

  });


}


QuestionsCollection.prototype.displayEntireCollection = function(){
    $('.questions').empty();
// **** NEWER **** Moved appendListenersToAnswers to the top of the following list so the
// on.("click") functions work correctly.
      this.appendListenersToAnswers();
      this.renderCurrentQuestion();
      this.renderTrendingQuestions();
// ****NEW**** This calls the renderAskQuestions function, so the new template/modal is
// loaded when you click the "answer" button to see questions.
      this.renderAskQuestions();

  }

function resetForm($form) {
    $form.find('input:text, input:password, input:file, select, textarea').val('');
    $form.find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');
}

var questionsCollection = new QuestionsCollection();


$(function(){



  questionsCollection.appendListeners();

  questionsCollection.fetch();

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }


  // $(questionsCollection).on('trigg', function(){
  //   displayEntireCollection();
  // })


  $('#question_form').on('submit', function(e){
    e.preventDefault();
    var newQuestionInput = $(this).serializeArray();
    console.log({content: newQuestionInput[0].value, option_1: newQuestionInput[1].value, option_2: newQuestionInput[2].value, user_id: newQuestionInput[3].value});
    questionsCollection.create({content: newQuestionInput[0].value, option_1: newQuestionInput[1].value, option_2: newQuestionInput[2].value, user_id: newQuestionInput[3].value});

      resetForm($('#question_form'));
  });

  $('#question_form_this').on('submit', function(e){
    e.preventDefault();
    var newQuestionInput = $(this).serializeArray();
    console.log({content: newQuestionInput[0].value, option_1: newQuestionInput[1].value, option_2: newQuestionInput[2].value, user_id: newQuestionInput[3].value});
    questionsCollection.create({content: newQuestionInput[0].value, option_1: newQuestionInput[1].value, option_2: newQuestionInput[2].value, user_id: newQuestionInput[3].value});

      resetForm($('#question_form_this'));
  });

  $('#question_form_rank').on('submit', function(e){
    e.preventDefault();
    var newQuestionInput = $(this).serializeArray();
    console.log({content: newQuestionInput[0].value, range_min: newQuestionInput[1].value, range_max: newQuestionInput[2].value, user_id: newQuestionInput[3].value});
    questionsCollection.create({content: newQuestionInput[0].value, option_1: newQuestionInput[1].value, option_2: newQuestionInput[2].value, user_id: newQuestionInput[3].value});

      resetForm($('#question_form_rank'));
  });

});
