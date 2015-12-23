class ApplicationsController < ActionController::Base


  def new
    @applicaiton = Application.new
  end

  def create
    @applicaiton = Application.create(name: params[:name],
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
  end

 def show

 end

 def index
 end

end
