class AnswersController < ApplicationController

  def index
    @current_answer = Answer.find(params[:id])
    @question = @current_answer.question_id.question
    @answer = Answer.new
  end


  def new
    @answer = Answer.new
  end

  def create
    Answer.create(answer_attributes)
  end

  # def update
  #   Answer.find(params[:id]{
  #     vote_count: params[:vote_count]
  #     })
  # end

private

  def answer_attributes
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
