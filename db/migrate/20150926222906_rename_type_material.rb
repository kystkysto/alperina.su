class RenameTypeMaterial < ActiveRecord::Migration
  def change
    rename_column :materials, :type, :rubric
  end
end
