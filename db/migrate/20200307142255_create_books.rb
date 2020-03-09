class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :title
      t.float :price
      t.string :author

      t.timestamps
    end
  end
end
