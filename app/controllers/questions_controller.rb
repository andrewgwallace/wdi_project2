class QuestionsController < ApplicationController

  before_action :authenticate_user!
  # user_signed_in?

  def index

  # Including @user in order to create questions with a user_id params
  @user= User.find(current_user.id)
  @questions = Question.all
  @question = Question.new

  end

  def new
    @question = Question.new
  end

  def create

     @question = Question.create(question_attributes)

      redirect_to "/questions/#index"
  end

  def show
    @questions = Question.all
  end

private

   def question_attributes
      params.require(:question).permit(:user_id, :content, :option_1, :option_2, :range_min, :range_max)
    end

end
