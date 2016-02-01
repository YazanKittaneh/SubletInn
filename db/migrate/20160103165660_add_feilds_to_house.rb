class AddFeildsToHouse < ActiveRecord::Migration
  def change
      add_column :House, :name, :string
      add_column :House, :picture, :string
      add_column :House, :location, :string
    end
end
