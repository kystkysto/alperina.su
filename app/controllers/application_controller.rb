class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :authenticate_user!

  def index
    render :template => 'index'
  end

  def aplication
    respond_to do |format|
        format.js { render :file => "/assets/javascripts/app.js" }
    end
  end
end