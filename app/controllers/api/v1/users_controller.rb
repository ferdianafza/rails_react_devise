class Api::V1::UsersController < ApplicationController
	protect_from_forgery with: :null_session
    def create
	    user = User.create!(user_params)
	    if user
	      render json: user
	    else
	      render json: user.errors
	    end
    end

	def destroy
		
	end

	private

	  def user_params
	    params.permit(:email, :password, :password_confirmation)
	  end
end