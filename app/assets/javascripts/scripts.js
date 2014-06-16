
// ************ Model *************
function Question(questionJSON){
  this.userid = questionJSON.userid;
  this.content = questionJSON.content;
  this.option_1 = questionJSON.option_1;
  this.option_2 = questionJSON.option_2;
  this.range_min = questionJSON.range_min;
  this.range_max = questionJSON.range_max;
  this.id = questionJSON.id;
}

// ************ View *************
function QuestionView(model){
  this.model = model;
  this.el = undefined;
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
    });
}

var questionsCollection = new QuestionsCollection();

QuestionsCollection.prototype.add = function(questionJSON){
  var newQuestion = new Question(questionJSON);
  this.models[questionJSON.id] = newQuestion;
  $(this).trigger('trigg');
}

function displayEntireCollection(){
  $('.questions').empty();
  for(id in questionsCollection.models){
    var question = questionsCollection.models[id];
    var questionView = new QuestionView(question);
    // $('.questions').append(questionView.render().el);
  }
}



function resetForm($form) {
    $form.find('input:text, input:password, input:file, select, textarea').val('');
    $form.find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');
}




$(function(){

  questionsCollection.fetch();

  $(questionsCollection).on('trigg', function(){
    displayEntireCollection();
  })


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
});
