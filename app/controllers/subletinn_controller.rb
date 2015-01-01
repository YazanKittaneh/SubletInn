class SubletinnController < ActionController::Base

layout 'subletinn'
#def show
#  @welcome =
#end

def index
end

def francis
  redirect_to :controller => 'francis_controller', :action => 'show'
end

def houses
end

def page_switch
  layout '/subletinn' + params[:id]
end


end
