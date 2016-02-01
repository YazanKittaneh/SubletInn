class HousesController < ApplicationController

def new
  @house = House.new
end


def index
  @house = House.all
end

def show
  #if (@house = Houses.find(params[:id]) != nil)
    render params[:id]
  #end
end

def payment
end

def create
  @house= Houses.new(params[:id])
end

end
