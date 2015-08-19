class CreateMaterialTags < ActiveRecord::Migration
  def change
    create_table :material_tags do |t|
      t.belongs_to :material, index: true
      t.belongs_to :tag, index: true

      t.timestamps null: false
    end
  end
end
