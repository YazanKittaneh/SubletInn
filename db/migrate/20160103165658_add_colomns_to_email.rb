class AddColomnsToEmail < ActiveRecord::Migration
  def change
    add_column :emails, :address, :string
  end
end
