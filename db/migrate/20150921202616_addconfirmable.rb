class Addconfirmable < ActiveRecord::Migration
    def self.up 
        change_table(:users) do |t|
            t.boolean :confirmable, :default => false
        end
    end 
end
