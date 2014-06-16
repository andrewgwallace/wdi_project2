
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

QuestionView.prototype.render = function(){
  console.log(this.model);
  var newElement = $("<h1 class='question_list'>").html(this.model.content);
  $('.question-manager').html(newElement);
  this.addGraph();
  return this;
}

QuestionView.prototype.addGraph = function() {
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
              data: [5]
          }, {
              name: this.model.option_2,
              data: [9]
          }]
      });
        return this;
}


// ************ Collection *************
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

QuestionsCollection.prototype.renderCurrentQuestion = function() {
  var questionView = new QuestionView(this.models[this.currentRecord]);
  questionView.render();
}

QuestionsCollection.prototype.nextQuestion = function () {
  var lengthArray = this.models.length;
  this.currentRecord++ ;
  console.log("this is the current record", this.currentRecord);
   if (this.currentRecord === 9) {
    this.currentRecord = 0;
    this.fetch();
  };
  this.renderCurrentQuestion();
  console.log('working');
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
      self.displayEntireCollection()

    });
}

QuestionsCollection.prototype.add = function(questionJSON){
  var newQuestion = new Question(questionJSON);
  this.models.push(questionJSON);
  $(this).trigger('trigg');
}

QuestionsCollection.prototype.displayEntireCollection = function(){
    $('.questions').empty();
      this.renderCurrentQuestion();
  }

function resetForm($form) {
    $form.find('input:text, input:password, input:file, select, textarea').val('');
    $form.find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');
}

boo = 0;


$(function(){

  var questionsCollection = new QuestionsCollection();
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
});
