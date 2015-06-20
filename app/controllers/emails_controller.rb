class EmailsController < ApplicationController

  def new
    super
    @email = Emails.new
  end

  def create
    #@email = Email.new(params.require(:email).permit(:address))
    #if @email.save
    #  redirect_to action: 'thank_you'
    #end
  end

  def show
  end

  def thank_you
  end


#    if params[:email] == [/\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i]
#    redirect_to :controller=>'tips', :action => 'show', :id => @tip.permalink

end
