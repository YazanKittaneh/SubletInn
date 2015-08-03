class PaymentsController < ActionController::Base

def new
  @client_token = Braintree::ClientToken.generate
  @amount
end

def show
end

def create
  nonce = params[:payment_method_nonce]
  render action: :new and return unless nonce

  result = Braintree::Transaction.sale(
    amount: params[:plan],
    payment_method_nonce: nonce
  )

  flash[:success] = "Sale successful. Head to Sizzler" if result.success?
  flash[:notice] = "Something is amiss. #{result.subscription.errors}" unless result.success?
  redirect_to action: :new
end

def plan
  @plan = null
end

end
