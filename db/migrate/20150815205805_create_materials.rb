class CreateMaterials < ActiveRecord::Migration
  def change
    create_table :materials do |t|
      t.string :title
      t.text :text
      t.date :published
      t.string :type

      t.timestamps null: false
    end
  end
end
