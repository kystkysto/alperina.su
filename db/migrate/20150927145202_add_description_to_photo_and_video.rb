class AddDescriptionToPhotoAndVideo < ActiveRecord::Migration
    def change
        add_column :photos, :description, :string
        add_column :videos, :description, :string
    end
end
