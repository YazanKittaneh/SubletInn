class EmailMailer < ApplicationMailer
  default :from => 'chicagoSubletinn@gmail.com'

  # send a signup email to the user, pass in the user object that   contains the user's email address
  def send_signup_email(email)
    @email = email
    mail( :to => @email.address,
    :subject => 'SubletInn: Francis Application' )
  end

  def send_application_email(application)
    @application = application
    mail( :to => application.email,
    :subject => 'SubletInn: Francis Application' )
  end



end
