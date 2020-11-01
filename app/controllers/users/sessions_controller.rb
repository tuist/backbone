# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  protected
    def respond_to_on_destroy
      head :no_content
    end
end
