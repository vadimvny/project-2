class ApplicationController < Sinatra::Base
  
  enable :sessions
  enable :method_override

  # require File.expand_path(File.dirname(__FILE__) + './../connection')

  helpers Sinatra::AuthenticationHelper

  set :public_folder, File.expand_path(File.dirname(__FILE__) + '/../public')
  set :views, File.expand_path(File.dirname(__FILE__) + '/../views')

end