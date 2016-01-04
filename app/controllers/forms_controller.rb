class FormsController < ActionController::Base


  def new
    @form = Form.new
  end

  def create

    @form = Form.create(name: params[:name],
                                      email: params[:form][:email],
                                      date: DateTime.now,
                                      phone_number: params[:form][:phone_number],
                                      address: params[:form][:address],
                                      move_in_date: params[:form][:move_in_date],
                                      age: params[:form][:age],
                                      gender: params[:form][:gender],
                                      occupation: params[:form][:occupation],
                                      package: params[:form][:package],
                                      chicago: params[:form][:chicago],
                                      description: params[:form][:description],
                                      article: params[:form][:article])



    if @form!=nil
      EmailMailer.send_form_email(@form).deliver_now
      flash[:success] = "shiitsonee"
      redirect_to :back
    else
      flash[:error] = "shiitsonee"
    end

    @testMessage = "thing I need to put in the email"
  end



  def show
  end


  def index
  end

end
