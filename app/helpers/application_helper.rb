module ApplicationHelper
  require 'digest/md5'

  def generate_new_password_email
    user = User.find(params[:user_id])
    user.send_reset_password_instructions
    flash[:notice] = "Reset password instructions have been sent to your super secret email."
    redirect_to admin_user_path(user)
  end

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

  def gen_and_save_email_to_session
    user_email = user_email_maker
    session[:user_email] = user_email

    return user_email
  end

  def base_url

    user_email = session[:user_email]
    hash = Digest::MD5.hexdigest(user_email)
    gravatar_url = "http://www.gravatar.com/avatar/"
    gravatar_url.to_s + hash.to_s + "?s=100&d="
  end

  def wavatar
    base_url + 'wavatar'
  end

  def identicon
    base_url + 'identicon'
  end

  def monsterid
    base_url + 'monsterid'
  end

  def retro
    base_url + 'retro'
  end

end
