class EmailsController < ApplicationController


  require 'pg'

  def new
    @email = Email.new
  end

  def create
    @email = Email.new(params.require(:email).permit(:address))
    if @email.save
      flash[:success] = "Thanks! I'll be in touch soon!"
      redirect_to :back
    else
      render :back
    end




    conn = PGconn.connect("ip adddress", 5432, '', '', "db name", "user", "password")
    res  = conn.exec('select tablename, tableowner from pg_tables')

  end

  def show
  end

  def thank_you
  end


#    if params[:email] == [/\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i]
#    redirect_to :controller=>'tips', :action => 'show', :id => @tip.permalink

end
