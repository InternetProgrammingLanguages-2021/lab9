Rails.application.routes.draw do
  root controller: 'front', action: 'index'
  get 'chunks/index'
  get 'front/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # Almost every application defines a route for the root path ("/") at the top of this file.
  # root "articles#index"
end
