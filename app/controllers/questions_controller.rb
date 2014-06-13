class QuestionsController < ApplicationController

  def index

  # Including @user in order to create questions with a user_id params
 @user= User.find(current_user.id)

  end

  def create

      Question.create(question_attributes)

      redirect_to  "/questions/#index"
  end

private

   def question_attributes
      params(:question).permit(:user_id, :content, :option_1, :option_2, :range_min, :range_max)
    end

end
