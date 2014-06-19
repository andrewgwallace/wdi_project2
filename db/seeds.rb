Question.delete_all

Question.create({
 user_id: 1,
 content: 'Do you prefer boxers or briefs?',
 option_1: 'Boxers',
 option_2: 'Briefs'
})

12.times do
Answer.create({
 question_id: 1,
 user_id: 1,
 option_answer: 'Boxers',
})
end

25.times do
Answer.create({
 question_id: 1,
 user_id: 1,
 option_answer: 'Briefs',
})
end

Question.create({
  user_id: 1,
  content: "How many days should I wait to call someone I just met?",
  range_min: 1,
  range_max: 14
  })

156.times do
Answer.create({
  question_id: 2,
  user_id: 1,
  range_answer: '2'
})
end

74.times do
Answer.create({
  question_id: 2,
  user_id: 1,
  range_answer: '5'
})
end
12.times do
Answer.create({
  question_id: 2,
  user_id: 1,
  range_answer: '13'
})
end
256.times do
Answer.create({
  question_id: 2,
  user_id: 1,
  range_answer: '3'
})
end
102.times do
Answer.create({
  question_id: 2,
  user_id: 1,
  range_answer: '1'
})
end

Question.create({
 user_id: 1,
 content: 'Which is worse?  An emotional affair or physical one?',
 option_1: 'Emotional',
 option_2: 'Physical'
})

43.times do
Answer.create({
 question_id: 3,
 user_id: 1,
 option_answer: 'Emotional',
})
end

23.times do
Answer.create({
 question_id: 3,
 user_id: 1,
 option_answer: 'Physical',
})
end

Question.create({
 user_id: 1,
 content: 'Would you date/marry someone of a different race and/or religion?',
 option_1: 'Yes',
 option_2: 'No'
})

14.times do
Answer.create({
 question_id: 4,
 user_id: 1,
 option_answer: 'Yes',
})
end

3.times do
Answer.create({
 question_id: 4,
 user_id: 1,
 option_answer: 'No',
})
end

Question.create({
  user_id: 1,
  content: "How many prescription drugs are you on?",
  range_min: 0,
  range_max: 50
  })

73.times do
Answer.create({
  question_id: 5,
  user_id: 1,
  range_answer: 2
})
end
42.times do
Answer.create({
  question_id: 5,
  user_id: 1,
  range_answer: 1
})
end
29.times do
Answer.create({
  question_id: 5,
  user_id: 1,
  range_answer: 3
})
end
94.times do
Answer.create({
  question_id: 5,
  user_id: 1,
  range_answer: 0
})
end

Question.create({
 user_id: 1,
 content: 'Do you think guns kill people or people kill people?',
 option_1: 'Guns',
 option_2: 'People'
})

37.times do
Answer.create({
 question_id: 6,
 user_id: 1,
 option_answer: 'Guns',
})
end

75.times do
Answer.create({
 question_id: 6,
 user_id: 1,
 option_answer: 'People',
})
end

Question.create({
  user_id: 1,
  content: "How many times do you shower per week?",
  range_min: 1,
  range_max: 21
  })

9.times do
Answer.create({
  question_id: 7,
  user_id: 1,
  range_answer: 14
})
end
16.times do
Answer.create({
  question_id: 7,
  user_id: 1,
  range_answer: 12
})
end
28.times do
Answer.create({
  question_id: 7,
  user_id: 1,
  range_answer: 7
})
end
36.times do
Answer.create({
  question_id: 7,
  user_id: 1,
  range_answer: 4
})
end
15.times do
Answer.create({
  question_id: 7,
  user_id: 1,
  range_answer: 3
})
end
4.times do
Answer.create({
  question_id: 7,
  user_id: 1,
  range_answer: 1
})
end

Question.create({
 user_id: 1,
 content: 'Do you believe everyone is inherently racist?',
 option_1: 'Yes',
 option_2: 'No'
})

14.times do
Answer.create({
 question_id: 8,
 user_id: 1,
 option_answer: 'Yes',
})
end

12.times do
Answer.create({
 question_id: 8,
 user_id: 1,
 option_answer: 'No',
})
end

Question.create({
  user_id: 1,
  content: "From 1-10 how attractive would you say you are?",
  range_min: 1,
  range_max: 10
  })

46.times do
Answer.create({
  question_id: 9,
  user_id: 1,
  range_answer: 7
})
end
26.times do
Answer.create({
  question_id: 9,
  user_id: 1,
  range_answer: 8
})
end
62.times do
Answer.create({
  question_id: 9,
  user_id: 1,
  range_answer: 4
})
end
11.times do
Answer.create({
  question_id: 9,
  user_id: 1,
  range_answer: 2
})
end

Question.create({
 user_id: 1,
 content: 'Is it customary to tip waiters in Paris?',
 option_1: 'Yes',
 option_2: 'No'
})

34.times do
Answer.create({
 question_id: 10,
 user_id: 1,
 option_answer: 'Yes',
})
end

67.times do
Answer.create({
 question_id: 10,
 user_id: 1,
 option_answer: 'No',
})
end

Question.create({
 user_id: 1,
 content: 'Have you ever done molly?',
 option_1: 'Yes',
 option_2: 'No'
})

3.times do
Answer.create({
 question_id: 11,
 user_id: 1,
 option_answer: 'Yes',
})
end

15.times do
Answer.create({
 question_id: 11,
 user_id: 1,
 option_answer: 'No',
})
end

Question.create({
  user_id: 1,
  content: "How many sexual partners have you had?",
  range_min: 0,
  range_max: 100
  })

52.times do
Answer.create({
  question_id: 12,
  user_id: 1,
  range_answer: 6
})
end
37.times do
Answer.create({
  question_id: 12,
  user_id: 1,
  range_answer: 11
})
end
80.times do
Answer.create({
  question_id: 12,
  user_id: 1,
  range_answer: 2
})
end
16.times do
Answer.create({
  question_id: 12,
  user_id: 1,
  range_answer: 1
})
end



Question.create({
  user_id: 1,
  content: 'From 0-10 how financially well off would you say you are?',
  range_min: 0,
  range_max: 10
  })

1.times do
Answer.create({
  question_id: 14,
  user_id: 1,
  range_answer: 10
})
end
129.times do
Answer.create({
  question_id: 14,
  user_id: 1,
  range_answer: 9
})
end
126.times do
Answer.create({
  question_id: 14,
  user_id: 1,
  range_answer: 8
})
end
215.times do
Answer.create({
  question_id: 14,
  user_id: 1,
  range_answer: 7
})
end
412.times do
Answer.create({
  question_id: 14,
  user_id: 1,
  range_answer: 6
})
end
255.times do
Answer.create({
  question_id: 14,
  user_id: 1,
  range_answer: 5
})
end
532.times do
Answer.create({
  question_id: 14,
  user_id: 1,
  range_answer: 4
})
end
182.times do
Answer.create({
  question_id: 14,
  user_id: 1,
  range_answer: 3
})
end
132.times do
Answer.create({
  question_id: 14,
  user_id: 1,
  range_answer: 2
})
end
112.times do
Answer.create({
  question_id: 14,
  user_id: 1,
  range_answer: 1
})
end



Question.create({
 user_id: 1,
 content: 'Do you prefer boxers or briefs?',
 option_1: 'Boxers',
 option_2: 'Briefs'
})

12.times do
Answer.create({
 question_id: 16,
 user_id: 1,
 option_answer: 'Boxers',
})
end

25.times do
Answer.create({
 question_id: 16,
 user_id: 1,
 option_answer: 'Briefs',
})
end

Question.create({
 user_id: 1,
 content: 'Who would win in a fight?  Batman or Superman?',
 option_1: 'Batman',
 option_2: 'Superman'
})

23.times do
Answer.create({
 question_id: 17,
 user_id: 1,
 option_answer: 'Superman',
})
end

12.times do
Answer.create({
 question_id: 17,
 user_id: 1,
 option_answer: 'Batman',
})
end

Question.create({
 user_id: 1,
 content: 'If they were running against each other, who do you think would win?',
 option_1: 'Hillary Clinton',
 option_2: 'Chris Christie'
})

143.times do
Answer.create({
 question_id: 18,
 user_id: 1,
 option_answer: 'Clinton',
})
end

132.times do
Answer.create({
 question_id: 18,
 user_id: 1,
 option_answer: 'Christie',
})
end

Question.create({
 user_id: 1,
 content: 'Should You Shower Before Bed or In The Morning?',
 option_1: 'Before Bed',
 option_2: 'In the Morning'
})

155.times do
Answer.create({
 question_id: 19,
 user_id: 1,
 option_answer: 'Before Bed',
})
end

86.times do
Answer.create({
 question_id: 19,
 user_id: 1,
 option_answer: 'In the Morning',
})
end

Question.create({
 user_id: 1,
 content: 'Should do you floss before you brush or after?',
 option_1: 'Before',
 option_2: 'After'
})

55.times do
Answer.create({
 question_id: 20,
 user_id: 1,
 option_answer: 'Before',
})
end

32.times do
Answer.create({
 question_id: 20,
 user_id: 1,
 option_answer: 'After',
})
end


Question.create({
 user_id: 1,
 content: 'Do your parents own a gun?',
 option_1: 'Yes',
 option_2: 'No'
})

83.times do
Answer.create({
 question_id: 23,
 user_id: 1,
 option_answer: 'Yes',
})
end

54.times do
Answer.create({
 question_id: 23,
 user_id: 1,
 option_answer: 'No',
})
end

Question.create({
 user_id: 1,
 content: 'Have you ever had sex in an elevator?',
 option_1: 'Yes',
 option_2: 'No'
})

4.times do
Answer.create({
 question_id: 24,
 user_id: 1,
 option_answer: 'Yes',
})
end

9.times do
Answer.create({
 question_id: 24,
 user_id: 1,
 option_answer: 'No',
})
end







