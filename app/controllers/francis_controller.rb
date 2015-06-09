class FrancisController < ActionController::Base

#def show
#  @welcome =
#end

def index
  render :file => 'layouts/francis.html.erb'
end

end
