class Answer < ActiveRecord::Base

  belongs_to :question

  # def self.build(question_id, user_id, option_answer, range_answer, comment, vote_count)
  #   Answer.create({
  #     question_id: question_id,
  #     user_id: user_id,
  #     option_answer: option_answer,
  #     range_answer: range_answer,
  #     comment: comment,
  #     vote_count: vote_count
  #     })
  # end

end
