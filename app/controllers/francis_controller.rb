class FrancisController < ActionController::Base

layout 'francis'

def show
  layout '/francis' + params[:id]
end

def index
end

end
