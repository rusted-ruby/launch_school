require "sinatra"
require "sinatra/reloader"
require "tilt/erubis"
require "erb"

get "/" do
  setup()
end

get "/reverse" do
  setup(true)
end

def setup(reverse = nil)
  rbFiles = File.join("public/**", "*")
  puts rbFiles
  @fileArray = Dir.glob(rbFiles)
  @fileNames = [];
  @fileArray.each_with_index do |file, i|
    @fileNames[i] = File.basename(file)
  end

  # keys are filenames, values are paths. Need this so the filenames stick with their paths
  @hash = {}
  @fileNames.each_with_index do |fileName, i|
    #only want file names
    next if fileName.split(".")[0] == fileName
    @hash[fileName] = @fileArray[i]
  end

  #sort alphabetically by default
  if !reverse 
    @fileAndPathPairs = @hash.sort
  else
    @fileAndPathPairs = @hash.sort.reverse
  end

  erb :home
end


