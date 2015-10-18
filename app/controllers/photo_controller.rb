class PhotoController < ApplicationController
  respond_to :json
  skip_before_filter :verify_authenticity_token
  before_action :authenticate_user!, :except => [:index, :show, :create, :update,:destroy]

  def create
    
    photo = params.require(:photo).permit(:file, :description, :rubric)

    ext = File.extname(photo[:file].original_filename)
    name = SecureRandom.hex(6) + ext
    directory = "public/img/photos"

    path = File.join(directory, name)
    
    File.open(path, "wb") do |f| 
      f.write(photo[:file].read)
    end  
    
    @photo = Photo.new(path: name, description: photo[:description], rubric: photo[:rubric])
    @photo.save
    render :json => @photo
  end

  def update
    @photo = Photo.update(params[:id], permit)
    render :json => @photo
  end

  def destroy
    @photo = Photo.find_by_id(params[:id])
    if @photo
      directory = "public/img/photos"
      path = File.join(directory, @photo.path)
      File.delete(path)
      @photo.destroy
      render :json => @photo
    else
      render :nothing => true, :status => 404
    end
  end

  def index

    limit = 11
    offset = 0
    materials = []
    
    if params[:after] === 'infinity'
      limit = 10000
    elsif params[:after]
      offset = params[:after]
    end

    if params[:rubric] && params[:rubric] != 'all'
      @photos = Photo.where(rubric: params[:rubric]).order(created_at: :desc).limit(limit).offset(offset)
    else
      @photos = Photo.all.order(created_at: :desc).limit(limit).offset(offset)
    end
    render :json => @photos
  end

  def show
    @photo = Photo.find_by_id(params[:id])
    render :json => @photo
  end

  def overlay
    respond_to do |format|
      format.html
    end
  end

  def window
    respond_to do |format|
      format.html
    end
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
    params.require(:photo).permit(:description, :rubric)
  end

end
