# frozen_string_literal: true

class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def github
    @user = UserCreateService.call(auth: auth_data)

    if @user.persisted?
      sign_in_and_redirect(@user, event: :authentication)
    else
      data = auth_data.except("extra")
      session["devise.oauth.data"] = data
      redirect_to(new_user_registration_url)
    end
  end

  def failure
    redirect_to(root_path)
  end

  def auth_data
    request.env["omniauth.auth"]
  end
end
