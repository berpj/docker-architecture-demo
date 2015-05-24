class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # or APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session
end
