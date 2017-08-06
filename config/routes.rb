Rails.application.routes.draw do
  root to: "batches#index"
  resources :batches, only: [ :index, :show, :new, :create, :destroy ] do
    resources :posts, only: [ :new, :create, :destroy ]
  end
end
