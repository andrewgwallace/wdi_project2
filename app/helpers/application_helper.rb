module ApplicationHelper
  def user_email_maker
   i = 0
   user_string = []
   letter = %w[a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9 _ ]
   length = rand(10..16)
     while i < length do
       letter.shuffle!
       user_string << letter.sample
       i += 1
     end
       user_string.shuffle.join + '@mailinator.com'
 end
end
