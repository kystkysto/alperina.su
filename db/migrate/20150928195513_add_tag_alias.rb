class AddTagAlias < ActiveRecord::Migration
  def change
    add_column :tags, :alias, :string
  end
end
