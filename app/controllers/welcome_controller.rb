class WelcomeController < ActionController::Base

#def show
#  @welcome =
#end

def index
  render :file => 'layouts/welcome.html.erb'
end

end
