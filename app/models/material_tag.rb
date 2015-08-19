class MaterialTag < ActiveRecord::Base
    belongs_to :material
    belongs_to :tag
end
