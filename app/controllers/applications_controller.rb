class ApplicationsController < ActionController::Base


  def new
    @application = Application.new
  end

  def create
    @application = Application.create(name: params[:name],
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

    if @application.save && @application!=nil
      EmailMailer.send_signup_email(@application).deliver_now
      redirect_to :back
    else
      flash[:error] = "shiitsonee"
    end
  end

  def show
  end


  def index
    @application = Application.all
  end

end
