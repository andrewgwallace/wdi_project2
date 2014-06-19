# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Seed Data
Question.delete_all

# range_question

Question.create({
  user_id: 1,
  content: 'Is Coke or Pepsi your favorite drink?',
  option_1: 'coke',
  option_2: 'pepsi'
})

9.times do
Answer.create({
  question_id: 1,
  user_id: 1,
  option_answer: 'coke',
})
end

5.times do
Answer.create({
  question_id: 1,
  user_id: 1,
  option_answer: 'pepsi',
})
end

Question.create({
  user_id: 1,
  content: 'Frappucino or latte?',
  option_1: 'Frappacino',
  option_2: 'latte'
})

9.times do
Answer.create({
  question_id: 2,
  user_id: 1,
  option_answer: 'Frappacino'
})
end

5.times do
Answer.create({
  question_id: 2,
  user_id: 1,
  option_answer: 'latte'
})
end

Question.create({
  user_id: 1,
  content: 'Whats your favorite scotch?',
  option_1: 'mcellen',
  option_2: 'belles'
})

9.times do
Answer.create({
  question_id: 3,
  user_id: 1,
  option_answer: 'mcellen'
})
end

5.times do
Answer.create({
  question_id: 3,
  user_id: 1,
  option_answer: 'belles'
})
end

Question.create({
  user_id: 1,
  content: 'Stoli or Grey Goose?',
  option_1: 'stoli',
  option_2: 'grey goose'
})

9.times do
Answer.create({
  question_id: 4,
  user_id: 1,
  option_answer: 'stoli'
})
end

5.times do
Answer.create({
  question_id: 4,
  user_id: 1,
  option_answer: 'grey goose'
})
end

Question.create({
  user_id: 1,
  content: 'Jeter or a-rod',
  option_1: 'jeter',
  option_2: 'a-rod'
})
9.times do
Answer.create({
  question_id: 5,
  user_id: 1,
  option_answer: 'jeter'
})
end

5.times do
Answer.create({
  question_id: 5,
  user_id: 1,
  option_answer: 'a-rod'
})
end

Question.create({
  user_id: 1,
  content: 'How many days?',
  range_min: 0,
  range_max: 10
  })

Question.create({
  user_id: 1,
  content: 'How much money?',
  range_min: 0,
  range_max: 10
  })


Question.create({
  user_id: 1,
  content: 'Favorite kardashian',
  option_1: 'there is no such thing',
  option_2: 'dont have a favorite kardashian'
})

Question.create({
  user_id: 1,
  content: 'Whos your favorite jimmy? Kimmel or Fallon?',
  option_1: 'kimmel',
  option_2: 'fallon'
})

Question.create({
  user_id: 1,
  content: 'Guns n Roses or Motely Crue?',
  option_1: 'GnR',
  option_2: 'motley crue'
})

Question.create({
  user_id: 1,
  content: 'Helvetica or Courier New?',
  option_1: 'helvetica',
  option_2: 'courier new'
})

Question.create({
  user_id: 1,
  content: 'Han Solo or Luke Skywalker?',
  option_1: 'solo baby solo',
  option_2: 'skywalker'
})

10.times do

Answer.create({
  question_id: 6,
  user_id: 1,
  range_answer: rand(0..10)
})

end

10.times do

Answer.create({
  question_id: 7,
  user_id: 1,
  range_answer: rand(0..10)
})

end
