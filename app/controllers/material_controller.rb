class MaterialController < ApplicationController
  respond_to :json
  skip_before_filter :verify_authenticity_token
  before_action :authenticate_user!, :except => [:index, :show, :update, :create, :destroy, :new]

  def create
    @material = Material.new(permit)

    @tags = params[:material][:tags]

    if @tags.length > 0
      @tags.each do |k,v|
        @material.tags << Tag.find(k[:id])
      end
    end

    @material.save
    render :json => @material
  end

  def update
    @material = Material.update(params[:id], permit)
    
    @tags = params[:material][:tags]

    if @tags
      MaterialTag.delete_all('material_id = ' + params[:id])
      @tags.each do |k,v|
        @material.tags << Tag.find(k[:id])
      end
    end

    @material.save
    
    render :json => @material
  end

  def destroy
    @material = Material.find_by_id(params[:id])
    render :json => @material.destroy
  end

  def index
    
    limit = 5
    offset = 0
    materials = []
    
    if params[:after] === 'infinity'
      limit = 10000
    elsif params[:after]
      offset = params[:after]
    end

    if params.has_key?(:rubric) && params[:rubric] != 'all' && !params[:tag]
      @materials = Material.eager_load(:tags).where(rubric: params[:rubric]).order(published: :desc).limit(limit).offset(offset).to_a
    elsif params[:rubric] == 'persons' && params[:tag]
      @materials = Material.joins(:tags).where('tags.alias' => params[:tag]).order(published: :desc).limit(limit).offset(offset)
    else
      @materials = Material.eager_load(:tags).order(published: :desc).limit(limit).offset(offset).to_a
    end
    
    @materials.map do |m|

      material = {}

      m.text = parse_text(m.text)

      material = {

        material: m,
        tags: m.tags
      }

      materials.push(material)

      #tags = m.tags

      #m.tags = tags
      #@tags.push(m.tags) # = m.tags
    end
    render :json => materials
  end

  def new
    @materials = {}

    if params[:rubric] && params[:rubric] != 'all'
      @materials = Material.where(rubric: params[:rubric]).order(published: :desc)
    end
    
    render :json => @materials
  end

  def show
    @material = Material.find_by_id(params[:id])
    render :json => {
        material: @material,
        tags: @material.tags,
        anounce: parse_text(@material.text)
      }
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

  def parse_text(txt)

      Nokogiri::HTML.parse(txt).css('p').each do |p|
        if p.text != ''
          txt = p.text
          break
        end
      end

      ActionController::Base.helpers.strip_tags(txt)[0...500]
  end

end
