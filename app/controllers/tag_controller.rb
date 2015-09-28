class TagController < ApplicationController
  respond_to :json
  skip_before_filter :verify_authenticity_token
  before_action :authenticate_user!, :except => [:index, :show, :update, :create, :destroy]

  def create
    @tag = Tag.new(permit)
    @tag.save
    render :json => @tag
  end

  def update
    @tag = Tag.update(params[:id], permit)
    render :json => @tag
  end

  def destroy
    @tag = Tag.find_by_id(params[:id])
    render :json => @tag.destroy
  end

  def index
    @tags = Tag.all
    render :json => @tags
  end

  def show
    @tag = Tag.find_by_id(params[:id])
    render :json => @tag
  end
  
  def list
    respond_to do |format|
      format.html
    end
  end

  def edit
    respond_to do |format|
      format.html
    end
  end

  private

  def permit
    params.require(:tag).permit(:name, :alias)
  end

end
