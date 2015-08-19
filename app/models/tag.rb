class Tag < ActiveRecord::Base
    has_many :material_tags
    has_many :material, through: :material_tags
end
