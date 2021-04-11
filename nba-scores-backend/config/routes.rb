Rails.application.routes.draw do
  resources :games, only: [:index, :update]
  resources :teams do 
    resources :games, only: [:index]
  end
  resource :schedule, only: [:show] 
  # Using resource instead of resources, because there's only one at any given time

  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
