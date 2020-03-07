Rails.application.routes.draw do
  # devise_for :users
  namespace :api do
  	namespace :v1 do
  	resources :sessions, only: [:create, :destroy]
  	resources :users
  	end
  end

  root 'homes#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
