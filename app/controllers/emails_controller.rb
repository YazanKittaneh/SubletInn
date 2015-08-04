class EmailsController < ApplicationController


  require 'pg'

  def new
    @email = Email.new
  end

  def create
    #checks to see if email is valid before saving it to database or anything
    if params[:email][:address] =~ /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i

      @email = Email.new(params.require(:email).permit(:address))
      if @email.save
        EmailMailer.send_signup_email(@email).deliver_now
        flash[:success] = "Thank you! Check your email for our appplication."
        redirect_to :back
      else
        flash[:error] = "Whoops. Something went wrong. Try again!"
        redirect_to :back
        end
    else
      flash[:notice] = "Hmm, that email doesn't seem to be valid!"
      redirect_to :back
    end

  end

  def index
  end

  def thank_you
  end


#    if params[:email] == [/\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i]
#    redirect_to :controller=>'tips', :action => 'show', :id => @tip.permalink

end
