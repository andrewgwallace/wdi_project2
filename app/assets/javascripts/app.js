var Qapp = Qapp || { Models: {}, Collections: {}, Views: {} };

Qapp.initialize = function() {

  var questionCollection = new Qapp.Collections.QuestionCollection();

  var questionListView = new Qapp.Views.QuestionListView({
    collection: questionCollection,
    el: $('#trending')
  });

  questionCollection.fetch();

  function resetForm($form) {
    $form.find('input:text, input:password, input:file, select, textarea').val('');
    $form.find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');
  }


  $('#question_form').on('submit', function(e){
    e.preventDefault();
    var newQuestionInput = $(this).serializeArray();
    console.log({content: newQuestionInput[0].value, option_1: newQuestionInput[1].value, option_2: newQuestionInput[2].value, user_id: newQuestionInput[3].value});
    questionCollection.create({content: newQuestionInput[0].value, option_1: newQuestionInput[1].value, option_2: newQuestionInput[2].value, user_id: newQuestionInput[3].value});

      resetForm($('#question_form'));
  });

  $('#question_form_this').on('submit', function(e){
    e.preventDefault();
    var newQuestionInput = $(this).serializeArray();
    console.log({content: newQuestionInput[0].value, option_1: newQuestionInput[1].value, option_2: newQuestionInput[2].value, user_id: newQuestionInput[3].value});
    questionCollection.create({content: newQuestionInput[0].value, option_1: newQuestionInput[1].value, option_2: newQuestionInput[2].value, user_id: newQuestionInput[3].value});

      resetForm($('#question_form_this'));
  });

  $('#question_form_rank').on('submit', function(e){
    e.preventDefault();
    var newQuestionInput = $(this).serializeArray();
    console.log({content: newQuestionInput[0].value, range_min: newQuestionInput[1].value, range_max: newQuestionInput[2].value, user_id: newQuestionInput[3].value});
    questionCollection.create({content: newQuestionInput[0].value, range_min: newQuestionInput[1].value, range_max: newQuestionInput[2].value, user_id: newQuestionInput[3].value});

      resetForm($('#question_form_rank'));
  });

}

$(function() {

  Qapp.initialize();

})
