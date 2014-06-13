class QuestionsController < ApplicationController

  def index

  # Including @user in order to create questions with a user_id params
  @user

  end

  def create

    # if the question is a yes or no question, then create the question setting option_1 to yes, option_2 to no.
    if params[:question][:range_question].nil? #!= nil
      Question.create(question_attributes)


  end


   def question_attributes
      params(:question).permit(:range_question, :option_1, :option_2)
    end

end
