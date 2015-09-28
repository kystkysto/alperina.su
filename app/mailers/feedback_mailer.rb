class FeedbackMailer < ApplicationMailer
    def feedback_email(feedback)
        @feedback = feedback
        mail(to: 'yfimsolovyev@narod.ru', subject: @feedback.name + '<' + @feedback.email + '>')
    end
end
