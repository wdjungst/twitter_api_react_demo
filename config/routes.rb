Rails.application.routes.draw do
  root 'dashboard#index'
  resources :tweets
  get '/followers', to: 'tweets#followers'
  get '/search', to: 'tweets#search'
end
