class QuotesController < ApplicationController
  respond_to :json
  skip_before_filter :verify_authenticity_token
  before_action :authenticate_user!, :except => [:index, :show, :update, :create, :destroy, :edit, :list]
  before_action :set_quote, only: [:show, :update, :destroy]

  # GET /quotes
  # GET /quotes.json
  def index
    @quotes = Quote.all.order(created_at: :desc)
    render :json => @quotes
  end

  # GET /quotes/1
  # GET /quotes/1.json
  def show
    render :json => set_quote
  end

  # GET /quotes/1/edit
  def edit
    respond_to do |format|
      format.html
    end
  end

  def list
    respond_to do |format|
      format.html
    end
  end

  # POST /quotes
  # POST /quotes.json
  def create
    @quote = Quote.new(permit)
    @quote.save
    render :json => @quote
  end

  # PATCH/PUT /quotes/1
  # PATCH/PUT /quotes/1.json
  def update
    @quote = set_quote
    @quote.update(permit)
    render :json => @quote
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
