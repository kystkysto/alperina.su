class MainController < ApplicationController
  respond_to :json
  #skip_before_filter :verify_authenticity_token
  before_action :authenticate_user!, :except => [:index, :show] #:update, :create, :destroy, :new]

  def index
    render file: Rails.public_path + 'index.html'
  end

  def create
    @main = Main.new(permit)
    @main.save
    render :json => @main
  end

  def update
    @main = Main.update(params[:id], permit)

    @main.save
    
    render :json => @main
  end

  def destroy
    @main = Main.find_by_id(params[:id])
    render :json => @main.destroy
  end

  def show
    @main = Main.find_by_id(params[:id])
    render :json => @main
  end

  def edit
    respond_to do |format|
      format.html
    end
  end

  private

  def permit
    params.require(:main).permit(:content)
  end

end
