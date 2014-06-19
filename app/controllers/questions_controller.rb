class QuestionsController < ApplicationController

  respond_to :json, :html

  def index
  if current_user
    @user= User.find(current_user.id)
  end
  @questions_all = Question.last(10)
  questions = Question.last(10)
  respond_with questions
  @current_user = current_user
  end

  def answers_to_question



  end


  def create
     question = Question.create(question_params)
     respond_with question

  end

  def show
    @question = Question.find(params[:id])
    @answer = Answer.new

    respond_to do |f|
      f.html
# <<<<<<< HEAD
      f.json {render :json => {
        option_1_results: @question.answers.where(option_answer: @question.option_1).length,
        option_2_results: @question.answers.where(option_answer: @question.option_2).length}
      }
# =======
      f.json {render :json => [@question.answers.where(option_answer: @question.option_1).length,
        @question.answers.where(option_answer: @question.option_2).length]}
# >>>>>>> master

    end

  end


private

   def question_params
      params.require(:question).permit(:user_id, :content, :option_1, :option_2, :range_min, :range_max)
    end

end
