class Material < ActiveRecord::Base
    has_many :material_tags
    has_many :tags, through: :material_tags
end
