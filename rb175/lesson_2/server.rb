# ruby libary that has classes we can use to create and interact with servers
require "socket" 

# this creates a new TCP server for allowing two computers to communicate.
# the server will be on localhost, port 3003. 
server = TCPServer.new("localhost", 3003)

def parse_request(request_line)
  req_arr = request_line.split
  http_method = req_arr[0]
  query_arr = req_arr[1].split("?")
  path = query_arr[0]
  query = query_arr[1]
  pairs = query.split("&")
  params = {}
  pairs.each do |pair|
    key, value = pair.split("=")
    params[key] = value
  end
  [http_method, path, params]
end

# main application code. the code in here will run over and over again
loop do 
  # waits until someone tries to call the server. returns a client object we can use to
  # interact with the remote system trying to call our server.
  client = server.accept

  # get the first line of the request from the client and print it to the server console.
  request_line = client.gets
  next if !request_line || request_line =~ /favicon/
  puts request_line

  # use rand to return a number between 0 and 5. add 1 to make the range 1 to 6. 
  #client.puts rand(6) + 1
  # we want to make this better though: we want to specify the sides of the dice in our 
  #input. We can do that by adding inputs to the URL and parsing them.

  #we'll start by parsin the params of our url. 
  # we want to pass rolls (number of random numbers to generate) and sides (range of random nums)
  # example URL: http://localhost:3003/?rolls=2&sides=6

  # example request typing that URL in sends to the server: 
  # "GET /?rolls=2&sides=6 HTTP/1.1"

  # here's what we want to turn the request into
  # http_method == "GET"
  # path= "/"
  # params = {"rolls" => "2", "sides" => "6" }

  # parse our params
  http_method, path, params = parse_request(request_line)
  puts http_method
  puts path
  puts params

  # send the request line to the client, print it on the client and close the connection.
=begin
  this is the code we had to display info on the client. The problem is, its not a true
  http response. We're just telling the browser to display some text. 

  client.puts "HTTP/1.1 200 OK"
  client.puts "Content-Type: text/plain\r\n\r\n"
  client.puts request_line
  # actually "roll the dice"
  params["rolls"].to_i.times do
    client.puts rand(params["sides"].to_i) + 1
  end

  The next step in our program will be to craft a legit http response that the browser 
  can interpret. More on that below. 
=end

  client.puts "HTTP/1.1 200 OK" #send the status of the http request
  #add headers. content-type tells the browser what we're sending back. Here, we tell
  #the browser to treat the rest of our response as html code
  client.puts "Content-Type: text/html" 
  client.puts #add an empty line to the response, since we need one separating headers and body
  #now, painstakingly, manually, build an html document for the body of the response.
  client.puts "<html>"
  client.puts "<body>"
  client.puts "<pre>"
  client.puts http_method
  client.puts path
  client.puts params
  client.puts"</pre>"
  client.puts "<h1>Rolls!</h1>"
  params["rolls"].to_i.times do
    roll = rand(params["sides"].to_i) + 1
    client.puts "<p>",roll,"</p>"
  end
  client.puts "</body>"
  client.puts "</html>"

  #close the connection with the client.
  client.close
end

