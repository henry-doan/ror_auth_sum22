class Note < ApplicationRecord
  belongs_to :cat

  validates :subject, :body, presence: true
end
