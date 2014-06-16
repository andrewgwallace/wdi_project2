class QuestionsController < ApplicationController

  respond_to :json, :html

  before_action :authenticate_user!
  # user_signed_in?
  def index
  # Including @user in order to create questions with a user_id params
  @user= User.find(current_user.id)
  questions = Question.all
  respond_with questions
  @current_user = current_user
  end


  def create
    # @question = Question.find(params[:id])
     question = Question.create(question_params)
     respond_with question

  end

  def show
    @question = Question.find(params[:id])
    @answer = Answer.new
    @answers = @question.answers
  end

  # def show
  #   @questions = Question.all
  # end

private

   def question_params
      params.require(:question).permit(:user_id, :content, :option_1, :option_2, :range_min, :range_max)
    end

end

