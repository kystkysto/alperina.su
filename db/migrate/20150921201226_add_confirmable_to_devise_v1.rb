class AddConfirmableToDeviseV1 < ActiveRecord::Migration
  def change
    change_table(:users) do |t| 
        t.confirmable 
    end 
  end
end