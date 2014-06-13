class QuestionsController < ApplicationController

  def index

  # Including @user in order to create questions with a user_id params
  @user

  end

  def create

      Question.create(question_attributes)

  end

private

   def question_attributes
      params(:question).permit(:content, :option_1, :option_2)
    end

end
