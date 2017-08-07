class Batch < ApplicationRecord
  has_many :posts, dependent: :destroy
end
