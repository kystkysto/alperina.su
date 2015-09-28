class AddRubricToPhotoAndVideo < ActiveRecord::Migration
    def change
        add_column :photos, :rubric, :string
        add_column :videos, :rubric, :string
    end
end
