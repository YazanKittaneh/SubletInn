class EmailsController < ApplicationController


  require 'pg'

  def new
    @email = Email.new
  end

  def create
    @email = Email.new(params.require(:email).permit(:address))
    if @email.save
      EmailMailer.send_signup_email(@email).deliver_now
      flash[:success] = "Thanks! I'll be in touch soon!"
      redirect_to :back
    else
      render :back
    end

  end

  def show
  end

  def thank_you
  end


#    if params[:email] == [/\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i]
#    redirect_to :controller=>'tips', :action => 'show', :id => @tip.permalink

end
