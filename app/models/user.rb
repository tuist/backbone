# frozen_string_literal: true

class User < ApplicationRecord
  # Devise
  devise(
    :database_authenticatable,
    :rememberable,
    :validatable,
    :timeoutable,
    :trackable,
    :omniauthable,
    omniauth_providers: %i[github]
  )

  # Associations
  has_many :authorizations, dependent: :destroy
end
