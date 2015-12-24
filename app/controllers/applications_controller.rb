class ApplicationsController < ActionController::Base


  def new
    @application = Application.new
  end

  def create
    @application = Application.new(name: params[:name],
                                      email: params[:email],
                                      date: DateTime.now,
                                      phone_number: params[:phone_number],
                                      address: params[:address],
                                      move_in_date: params[:move_in_date],
                                      age: params[:age],
                                      gender: params[:gender],
                                      occupation: params[:occupation],
                                      package: params[:package],
                                      chicago: params[:chicago],
                                      description: params[:description],
                                      article: params[:article])

    if @application.save
      EmailMailer.send_application_email(@application).deliver_now
    else
      flash[:error] = "shiitsonee"
    end
  end

  def show
  end

 def getEmail
   return @application.email
 end

  def index
  end

end
