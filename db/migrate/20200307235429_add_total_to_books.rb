class AddTotalToBooks < ActiveRecord::Migration[6.0]
  def change
  	add_column :books, :total, :integer
  end
end
