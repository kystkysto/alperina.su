Rails.application.routes.draw do

  devise_for :users
  
  scope 'api' do
    get 'material/list' => 'material#list'
    get 'material/edit' => 'material#edit'
    get 'photo/list' => 'photo#list'
    get 'photo/list' => 'photo#list'
    get 'photo/overlay' => 'photo#overlay'
    get 'photo/window' => 'photo#window'
    get 'video/list' => 'video#list'
    get 'video/edit' => 'video#edit'
    get 'quotes/list' => 'quotes#list'
    get 'quotes/edit' => 'quotes#edit'
    resources :feedback, :video, :home, :photo, :tag, :material, :quotes, shallow: true #, only: [:index, :show, :create, :update, :destroy]
  end

  get 'admin' => 'application#index'
  get 'admin/app.js' => 'application#app'
  get 'admin/lib.js' => 'application#lib'
  match 'admin/*path' => 'application#index', :via => [:get]

  #get '*path', to: 'main#index'

  match '*path' => 'main#index', :via => [:get]

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
