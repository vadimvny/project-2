class WelcomeController < ApplicationController
	get '/' do
		"Hello"	
		erb :index
	end
end