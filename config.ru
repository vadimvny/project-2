require 'bundler'
Bundler.require

require './helpers/authentication_helper'


require './controllers/application_controller'
require './controllers/welcome_controller'
require './controllers/hangman_controller'

map('/hangman'){run HangmanController}
map('/'){run WelcomeController}

