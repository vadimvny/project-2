require 'bundler'
Bundler.require

require './helpers/authentication_helper'

require './controllers/application_controller'
require './controllers/welcome_controller'


map('/'){run WelcomeController}

