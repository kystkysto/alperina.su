class CreateMains < ActiveRecord::Migration
  def change
    create_table :mains do |t|
      t.text :content

      t.timestamps null: false
    end
  end
end
