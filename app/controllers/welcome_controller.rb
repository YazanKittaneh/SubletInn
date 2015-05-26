class WelcomeController < ActionController::Base

def index
  render :file => 'layouts/welcome.html'
end

end
