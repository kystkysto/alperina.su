class MaterialController < ApplicationController
  respond_to :json
  skip_before_filter :verify_authenticity_token
  before_action :authenticate_user!, :except => [:index, :show, :update, :create, :destroy]

  def create
    @material = Material.new(permit)
    @material.save
    render :json => @material
  end

  def update
    @material = Material.update(params[:id], permit)
    render :json => @material
  end

  def destroy
    @material = Material.find_by_id(params[:id])
    render :json => @material.destroy
  end

  def index
    @materials = Material.all
    render :json => @materials
  end

  def show
    @material = Material.find_by_id(params[:id])
    render :json => @material
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
    params.require(:material).permit(:title, :text, :published, :rubric)
  end

end
