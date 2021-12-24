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

=begin
  for this next part, we're going to be playing with state. We want to have a button a 
  user can click to increment a number on the screen. this next part of the code will 
  display the current number. But how will we know what the current number is?

  We could do this with a database, or getting more complex with our server. Or we could
  do it with the URL. We'll start by passing in the current number as a param of our URL.
  The first step will be to parse it and display it below.

  We'll also be setting up some links on our page that can increment or decrement the current
  number by changing the params of the url and passing that url to the server.
=end

  # parse our params
  http_method, path, params = parse_request(request_line)
  puts http_method
  puts path
  puts params

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

  client.puts "<h1>Counter</h1>"

  #get the number from the parsed params and display it
  number=params["number"].to_i
  client.puts "<p>The current number is #{number}.</p>"

  #display the link html elements that will link us out to a new page where the number 
  #in the url is higher or lower than the current one. 
  client.puts "<a href='?number=#{number + 1}'>Add one</a>"
  client.puts "<a href='?number=#{number - 1}'>Subtract one</a>"

  client.puts "</body>"
  client.puts "</html>"

  #close the connection with the client.
  client.close
end