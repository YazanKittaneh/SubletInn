class AddFieldsToForm < ActiveRecord::Migration
  def change
    add_column :forms, :name, :string
    add_column :forms, :email, :string
    add_column :forms, :date, :string
    add_column :forms, :phone_number, :string
    add_column :forms, :move_in_date, :string
    add_column :forms, :age, :string
    add_column :forms, :gender, :string
    add_column :forms, :occupation, :string
    add_column :forms, :package, :string
    add_column :forms, :chicago, :string
    add_column :forms, :description, :string
    add_column :forms, :article, :string
    add_column :forms, :address, :string
  end
end
