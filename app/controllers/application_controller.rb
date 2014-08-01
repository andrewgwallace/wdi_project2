class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :null_session
  before_filter :configure_permitted_parameters, if: :devise_controller?

  helper_method :current_user

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:email, :password, :current_password, :encrypted_password, :username, :profile_pic_url, :answer_id_vote, :location, :birth_year, :ethnicity, :religion, :gender, :orientation) }
    devise_parameter_sanitizer.for(:account_update) { |u| u.permit(:email, :password, :current_password, :encrypted_password, :username, :profile_pic_url, :answer_id_vote, :location, :birth_year, :ethnicity, :religion, :gender, :orientation) }
  end

end
