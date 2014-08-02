class AnswersController < ApplicationController

 respond_to :json, :html

 before_action :authenticate_user!


  # def question
  #     @question = Question.find(params[:question_id])
  # end

  # def index
  #   @all_answers = Answer.all
  #   # @current_answer = Question.find(params[:id])
  #   # @question = @current_answer.question_id.question
  #   @answer = Answer.new
  # end


  # def new
  #   @question = Question.find(params[:id])
  #   # @question = Question.where({content: content})
  #   # @question_id = @question.id
  #   @qstring = Answer.question.content
  #   @option_1 = Answer.question.option_1
  #   @option_2 = Answer.question.option_2
  #   @range_min = Answer.question.range_min
  #   @range_max = Answer.question.range_max
  #   @comment = params[:comment]
  #   # @current_answer = Answer.find(params[:id])
  #   # @question = @current_answer.question_id.question
  #   # @answer = Answer.new

  # end

  def create
    answer = Answer.create(answer_params)
    respond_with answer
  end

  # def index

  #  @answer = Answer.find(params[:question_id])

  #  @range_answers = []
  #  @answers.each do |answer|
  #  @range_answers << answer["range_answer"]
  #   end

  #  @superarr = []
  #  unique = @range_answers.uniq
  #  unique.each do |element|
  #    @superarr << [element, 0, @range_answers.count(element)]
  #  end

  #  respond_to do |f|
  #    if @answer.option_1 != nil
  #    f.html
  #    f.json {render :json => [@answer.option_1.length,
  #      @answer.option_2.length]}
  #    else
  #    f.html
  #    f.json {render :json => @superarr}
  #  end

  # end


  # def update
  #   Answer.find(params[:id]{
  #     vote_count: params[:vote_count]
  #     })
  # end

private

  def answer_params
    params.require(:answer).permit(:range_answer, :option_answer, :comment, :user_id, :question_id, :vote_count)
  end

end
