class FrancisController < ActionController::Base

layout 'francis', except: [:payments]

def new
end

def show
  render "/francis/"+params[:id]
end

def index
end

def payments
  redirect_to action: 'payments#new'
end



end
