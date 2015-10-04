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
    @tags = params[:material][:tags]

    #@tags.each do |t|
    #  @material_tag = MaterialTag.new({tag_id: t, material_id: params[:id]})
    #  @material_tag.save
    #end
    @material = Material.update(params[:id], permit)
    #render :json => {tags:  @material.tags, mat: @material}
    render :json => @material
  end

  def destroy
    @material = Material.find_by_id(params[:id])
    render :json => @material.destroy
  end

  def index
    if params[:rubric] && params[:rubric] != 'all'
      @materials = Material.where(rubric: params[:rubric]).order(published: :desc)
    else
      @materials = Material.all.order(published: :desc)
    end
    
    @materials.map do |m|

      txt = m.text
      Nokogiri::HTML.parse(txt).css('p').each do |p|
        if p.text != ''
          txt = p.text
          break
        end
      end
      
      txt = ActionController::Base.helpers.strip_tags(txt)[0...500]
      m.text = txt
    end
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
