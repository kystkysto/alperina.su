class QuotesController < ApplicationController
  before_action :set_quote, only: [:show, :edit, :update, :destroy]

  # GET /quotes
  # GET /quotes.json
  def index
    @quotes = Quote.all
  end

  # GET /quotes/1
  # GET /quotes/1.json
  def show
    render :json => set_quote
  end

  # GET /quotes/1/edit
  def edit
  end

  # POST /quotes
  # POST /quotes.json
  def create
    @tag = Tag.new(permit)
    @tag.save
    render :json => @tag
  end

  # PATCH/PUT /quotes/1
  # PATCH/PUT /quotes/1.json
  def update
    @tag = Tag.update(params[:id], permit)
    render :json => @tag
  end

  # DELETE /quotes/1
  # DELETE /quotes/1.json
  def destroy
    render :json => set_quote.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_quote
      @quote = Quote.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def permit
      params.require(:quote).permit(:content, :active)
    end
end
