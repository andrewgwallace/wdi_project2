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

  # t.integer  "user_id"
  # t.integer  "question_id"
  # t.integer  "range_answer"
  # t.string   "option_answer"
  # t.string   "comment"
  # t.integer  "vote_count"
  # t.datetime "created_at"
  # t.datetime "updated_at"

  # answers     GET    /answers(.:format)             answers#index
  #             POST   /answers(.:format)             answers#create
  # new_answer  GET    /answers/new(.:format)         answers#new
  # answer      GET    /answers/:id(.:format)         answers#show
  #             PATCH  /answers/:id(.:format)         answers#update
  #             PUT    /answers/:id(.:format)         answers#update
  #             DELETE /answers/:id(.:format)         answers#destroy


  # def option_choices(question, option_1, option_2)
  #   answer = Answer.where(question_id: params[:id])
  # end

  # def ranges

  # end
