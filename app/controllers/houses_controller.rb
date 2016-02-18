class HousesController < ApplicationController

def new
  @houses = House.new
end


def index
  @houses = House.all
end

def show
  #if (@house = Houses.find(params[:id]) != nil)
    render params[:id]
  #end
end

def payment
end

def create
  @houses= House.new(params[:id])
end

end
