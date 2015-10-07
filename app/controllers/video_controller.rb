class VideoController < ApplicationController
  respond_to :json
  skip_before_filter :verify_authenticity_token
  before_action :authenticate_user!, :except => [:index, :show, :update, :create, :destroy]

  def create
    @video = Video.new(permit)
    @video.save
    render :json => @video
  end

  def update
    @video = Video.update(params[:id], permit)
    render :json => @video
  end

  def destroy
    @video = Video.find_by_id(params[:id])
    render :json => @video.destroy
  end

  def index
    if params[:rubric] && params[:rubric] != 'all'
      @videos = Video.where(rubric: params[:rubric]).order(created_at: :desc)
    else
      @videos = Video.all.order(created_at: :desc)
    end
    render :json => @videos
  end

  def show
    @video = Video.find_by_id(params[:id])
    render :json => @video
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
    params.require(:video).permit(:name, :description, :content, :rubric)
  end

end