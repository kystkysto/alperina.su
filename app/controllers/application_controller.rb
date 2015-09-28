class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  #protect_from_forgery with: :exception
  before_action :authenticate_user!, :except => [:app, :lib, :css]

  def index
    render :template => 'index'
  end

  def app
    respond_to do |format|
      format.js { render file: 'aplication/app.js' }
    end
  end

  def lib
    respond_to do |format|
      format.js { render file: 'aplication/lib.js' }
    end
  end

end