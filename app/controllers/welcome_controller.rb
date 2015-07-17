class WelcomeController < ActionController::Base

#def show
#  @welcome =
#end

def show
 render :file => 'layouts/welcome.html.erb'
end
end
