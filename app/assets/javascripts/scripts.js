

// ************ Model *************
function Question(questionJSON){
  this.user_id = questionJSON.user_id;
  this.content = questionJSON.content;
  this.option_1 = questionJSON.option_1;
  this.option_2 = questionJSON.option_2;
  // this.range_min = questionJSON.rangemin;
  this.id = questionJSON.id;
}

// ************ View *************
function QuestionView(models){
  this.models = models;
  this.model = models[id];
  this.el = undefined;
}
 var currentRecord = 1;
QuestionView.prototype.nextQuestion = function(){

  currentRecord++;
  displayEntireCollection();
//   for (i=1; i < models.length; i++) {

// var currentQuestion = _.values(this.model)[i]

// }

  // nextQuestion closing brace
}

// This is establishing what content to append to the html element:
QuestionView.prototype.render = function(){

  var questionTemplate = _.template($("#questionTemplate").text());
  var questionHTML = questionTemplate(this.model);
  var newElement = questionHTML;
  // var questionHTML = (this.model);
  // This will append the question names:

  //   for (i=1; i < this.models.length; i++) {

  //   var currentQuestion = _.values(this.model)[1]

  //   }
  // var newElement = $("<li class='question_list'>").html(_.values(this.model)[1]);
  // var newElement = $("<div class='question_list'>").html(_.values(this.models[currentRecord]));
  // var questionHashEl = _.values(this.model)[0]
  // console.log(questionHashEl);
  // var newElement = $("<h1 class='question_list'>").html(this.models[currentRecord].id);
  var exModel = this.models[22]
  console.log(_.values(this.models)[1]);
  console.log(exModel);
  this.el = newElement;
  return this;
}



// ************ Collection *************
function QuestionsCollection(){
  this.models = {};
}

QuestionsCollection.prototype.create = function(paramObject){
  $.ajax({
    url: '/questions',
    method: 'POST',
    dataType:'json',
    data: {question: paramObject}
  }).done(function(data){
    // INSERT CALLBACK CODE HERE
    console.log(data);
    questionsCollection.add(data);
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
    })
}

var questionsCollection = new QuestionsCollection();

QuestionsCollection.prototype.add = function(questionJSON){
  var newQuestion = new Question(questionJSON);
  this.models[questionJSON.id] = newQuestion;
  $(this).trigger('trigg');
}


function displayEntireCollection(){
  $('.questions').empty().html('');
  for(id in questionsCollection.models){
    // // original code showing a single model:
    // var question = questionsCollection.models[id];
    // var questionView = new QuestionView(question);
    var questions = questionsCollection.models;
    var model = questions[id]
    var questionView = new QuestionView(questions);
    // $('.question-manager').empty();
    $('.question-manager').append(questionView.render().el);
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: model.content
        },
        xAxis: {
            categories: [model.option_1, model.option_2]
        },
        yAxis: {
            title: {
                text: 'Number of answers'
            }
        },
        series: [{
            name: model.option_1,
            data: [5]
        }, {
            name: model.option_2,
            data: [9]
        }]
    });
    // console.log(model);
  }
}


function resetForm($form) {
    $form.find('input:text, input:password, input:file, select, textarea').val('');
    $form.find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function takeParams(a,b,c) {
  var newQuestionInput = $('#question_form').serializeArray();
    input_1 = newQuestionInput[a].value
    input_1_caps = toTitleCase(input_1);
    input_2 = newQuestionInput[b].value
    input_2_caps = toTitleCase(input_2);
    input_3 = newQuestionInput[c].value
    input_3_caps = toTitleCase(input_3);
    questionsCollection.create({content:input_1_caps, option_1: input_2_caps, option_2: input_3_caps, user_id: newQuestionInput[9].value});
      resetForm($('#question_form'));
}
function takeParamsRange(a,b,c) {
  var newQuestionInput = $('#question_form').serializeArray();
    input_1 = newQuestionInput[a].value
    input_1_caps = toTitleCase(input_1);
    input_2 = newQuestionInput[b].value
    input_3 = newQuestionInput[c].value
    questionsCollection.create({content:input_1_caps, option_1: input_2, option_2: input_3, user_id: newQuestionInput[9].value});
      resetForm($('#question_form'));
}



$(function(){

  // I'm aware the below code is fugly. We will refactor later.
  $(".this_that").click(function(){
    if ( $(".this_that_form").css("display") == "none" ){
      $(".this_that_form").css("display", "initial");
      $(".submit").css("display", "initial");
      $(".yes_no_form").css("display", "none");
      $(".ranking_form").css("display", "none");
    } else {
      $(".yes_no_form").css("display", "none");
      $(".ranking_form").css("display", "none");
    };
  });

  $(".yes_no").click(function(){
    if ( $(".yes_no_form").css("display") == "none" ){
      $(".yes_no_form").css("display", "initial");
      $(".submit").css("display", "initial");
      $(".ranking_form").css("display", "none");
      $(".this_that_form").css("display", "none");
    } else {
      $(".ranking_form").css("display", "none");
      $(".this_that_form").css("display", "none");
    };
  });

  $(".ranking").click(function(){
    if ( $(".ranking_form").css("display") == "none" ){
      $(".ranking_form").css("display", "initial");
      $(".submit").css("display", "initial");
      $(".yes_no_form").css("display", "none");
      $(".this_that_form").css("display", "none");
    } else {
      $(".yes_no_form").css("display", "none");
      $(".this_that_form").css("display", "none");
    };
  });

  questionsCollection.fetch();

  $(questionsCollection).on('trigg', function(){
    displayEntireCollection();
  })




  $('#question_form').on('submit', function(e){
  console.log(e);
  e.preventDefault();
  var newQuestionInput = $(this).serializeArray();
  console.log($(".this_that_form").css("display") );
  // Insert AJAX call below

    if ($(".this_that_form").css("display") === "inline-block") {
      takeParams(0,1,2);
     } else if ($(".yes_no_form").css("display") === "inline-block") {
        takeParams(3,4,5)
    } else if ($(".ranking_form").css("display") === "inline-block") {
      takeParamsRange(6,7,8)
     // conditional closing braces
    };
  // question_form.on submit closing braces
  })

  // Show the other hidden question characteristics:
  // $('.question-manager').on('click', '.question_content <%%= id >', function(){
  //   alert("I'm question content. I work");
  //   $(".question_options").slideToggle();
  // })

$('.question-manager').on('click', 'div', function(){
    // alert($(this).children(".question_options").text());
    // alert("I'm question content. I work");
    // $(this).children(".question_options").slideToggle();
    $(this).children(".question_display").slideToggle();
    // $(".question_options").slideToggle();
  })

  // $('.question-manager').each(function(){
  //   var thisLink = $(this).children('h4');
  //   thisLink.click(function(){
  //     alert("I'm question content. I work");
  //     $(".question_options").slideToggle();
  //   });
  // });

  $('.question-manager').on('click', '.question_option_1', function(){
    alert("I'm option 1. I work");
  })

  $('.question-manager').on('click', '.question_option_2', function(){
    alert("I'm option 2. I work");
  })

  // Highcharts chart js:
  // $('#container').highcharts({
  //       chart: {
  //           type: 'bar'
  //       },
  //       title: {
  //           text: 'Fruit Consumption'
  //       },
  //       xAxis: {
  //           categories: ['Apples', 'Bananas']
  //       },
  //       yAxis: {
  //           title: {
  //               text: 'Fruit eaten'
  //           }
  //       },
  //       series: [{
  //           name: 'Jane',
  //           data: [4, 5]
  //       }, {
  //           name: 'John',
  //           data: [5, 7]
  //       }]
  //   });

})
