class QuestionsController < ApplicationController

  respond_to :json, :html

  def index
  if current_user
    @user= User.find(current_user.id)
  end
  @questions_all = Question.last(10)
  questions = Question.last(10)
  respond_with questions
  # respond_with questions, :include => :answers
  @current_user = current_user
  end


  def create
     question = Question.create(question_params)
     respond_with question

  end

  def show
   @question = Question.find(params[:id])
   @answer = Answer.new

   @range_answers = []
   @question.answers.each do |answer|
   @range_answers << answer["range_answer"]
    end

   @superarr = []
   unique = @range_answers.uniq
   unique.each do |element|
     @superarr << [element, 0, @range_answers.count(element)]
   end


   respond_to do |f|
     if @question.option_1 != nil
     f.html
     f.json {render :json => [@question.answers.where(option_answer: @question.option_1).length,
       @question.answers.where(option_answer: @question.option_2).length]}
     else
     f.html
     f.json {render :json => @superarr}
   end

   end

 end


private

   def question_params
      params.require(:question).permit(:user_id, :content, :option_1, :option_2, :range_min, :range_max)
    end

end
