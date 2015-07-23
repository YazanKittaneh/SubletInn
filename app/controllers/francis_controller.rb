class FrancisController < ActionController::Base

layout 'francis'

def new
end

def show
  render "/francis/"+params[:id]
end

def index
end

def payments
end



end
