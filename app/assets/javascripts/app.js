var Qapp = Qapp || { Models: {}, Collections: {}, Views: {} };

Qapp.initialize = function() {

  var questionCollection = new Qapp.Collections.QuestionCollection();

  var questionListView = new Qapp.Views.QuestionListView({
    collection: questionCollection,
    el: $('#trending')
  });

  questionCollection.fetch();

  // var answersCollection = new Qapp.Collections.AnswerCollection();

  // answersCollection.fetch({data: $.param({  }) ,success:function(data){
  //   console.log("Answers collection fetch working", data);
  // }});

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

  setTimeout(function(){
    $('.answer_form').on('submit', function(e){
      console.log("answer form event", e);
      console.log("answer form submit working");
      e.preventDefault();
      var newAnswerInput = $(this).serializeArray();
      var self = this;
      console.log("answerform this", this, "this.attributes", this.attributes);

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
        // We will eventually use this to go to the next question, once we include the function for it?
        // questionCollection.nextQuestion();

    });
  }, 2000);



}

$(function() {
  Qapp.initialize();



})
