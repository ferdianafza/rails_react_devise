Rails.application.routes.draw do
  # devise_for :users
  namespace :api do
  	namespace :v1 do
  	resources :sessions, only: [:create, :destroy]
  	resources :users
    resources :books

    get '/show/:id', to: 'books#show'
    post 'books/create'
    get '/book/:id/edit', to: 'books#edit'
    put '/book/:id', to: 'books#update'
    delete '/destroy/:id', to: 'books#destroy'
  	end
  end

  root 'homes#index'
  get '/*path' => 'homes#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
