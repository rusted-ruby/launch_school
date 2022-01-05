#!/bin/bash

function server () {
  #TODOs
  # create a loop that runs forever
  # assign any input to a var named message
  # output the value of message
  while true
  do
    message_arr=() #create a bash array
    check=true
    while $check
    do
      read line #read an input line.
      # add each part of the input line to the message array. 
      # element 0 is the method, element 1 is the path, etc
      message_arr+=($line)
      # final line in the request will just be a newline, so its length will be 1. 
      # ${#line} returns the length of the $line variable. 
      if [[ "${#line}" -eq 1 ]]
      then
        check=false
      fi
    done
    method=${message_arr[0]}
    path=${message_arr[1]}
    if [[ $method = 'GET' ]]
    then
if [[ -f ./www/$path ]]
then
  # return the content of the file. Include a Content Type header for 200 responses
  echo -e "HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=utf-8\r\nContent-Length: $(wc -c <'./www/'$path)\r\n\r\n"; cat "./www/$path"
else
  echo -e "HTTP/1.1 404 Not Found\r\nContent-Length: 0\r\n"
fi
    else
      echo -e "HTTP/1.1 400 Bad Request\r\nContent-Length: 0\r\n"
    fi
  done

}

#this sets up a coprocess called SERVER_PROCESS. Allows us to run our server asynchronously
coproc SERVER_PROCESS { server; }

# set up netcat to listen to port 2345. The second part sets up the connection such that the
# input of the netcat process is passed to the server function, and the output of the server
# function is passed to netcat. Means that we can access anything sent via netcat in our 
# server function using the read command. 
netcat -lvk 2345 <&${SERVER_PROCESS[0]} >&${SERVER_PROCESS[1]}