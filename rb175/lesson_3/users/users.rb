require "sinatra"
require "sinatra/reloader"
require "tilt/erubis"
require "erb"
require 'yaml'

before do 
  #load yaml file with users
  @allUserInfo = YAML.load_file('users.yaml')
  #Here's the data structure we get
  #{:userName => {:email => email, :interests => ["string1", "string2"]}, <next user>}
  #this is really all that we need... we can get exactly what we need in the specific 
  #view templates. 
end

helpers do 
  #count the total interests among all the users
  def countInterests()
    count = 0
    @allUserInfo.each do |userName, userData|
      interestsArr = userData[:interests]
      count += interestsArr.length
    end
    count
  end
end

get "/" do
  #erb to the homepage view template. 
  #Within the view template, iterate through array to display user names and links to pages
  erb :home
end

get "/user/:name" do 
  @name = params['name'].to_sym
  #get the information for the specific user into a new data structure.
  @userHash = {}
  @userHash = @allUserInfo[@name]

  #erase the specific user from the data structure created in the before statement.
  @allUserInfo.delete(@name)
  
  #erb to the user view template to display specific info from the line 18 struct and other user 
  #info from the line 19 struct. 
  erb :user
end