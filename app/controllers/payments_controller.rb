class PaymentsController < ActionController::Base

def new
  @client_token = Braintree::ClientToken.generate
end

def create
  @params = params
  render action: :new
end

end
