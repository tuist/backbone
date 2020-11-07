# frozen_string_literal: true

Rails.application.routes.draw do
  # Devise
  devise_for :users, controllers: { omniauth_callbacks: "users/omniauth_callbacks", sessions: "users/sessions" }

  # Web app
  root to: "application#home"
end
