Rails.application.routes.draw do
  root to: "batches#index"
  resources :batches, only: [ :index, :show, :new, :create, :destroy ] do
    resources :post, only: [ :new, :create, :destroy ]
  end
end
