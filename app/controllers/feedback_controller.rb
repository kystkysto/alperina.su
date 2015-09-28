class FeedbackController < ApplicationController
  respond_to :json
  skip_before_filter :verify_authenticity_token
  before_action :authenticate_user!, :except => [:create]

  def create
    @feedback = Feedback.new(permit)
    @feedback.save
    FeedbackMailer.feedback_email(@feedback).deliver_now
    render :json => @feedback
  end

  def permit
    params.require(:feedback).permit(:name, :email, :comment)
  end
end
