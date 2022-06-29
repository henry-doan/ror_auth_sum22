class Cat < ApplicationRecord
  belongs_to :user
  has_many :notes, dependent: :destroy
  
  validates :name, :breed, :registry, :avatar, presence: true
end
