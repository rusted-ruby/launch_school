class Monroe
  def response(status, headers)
    content = yield if block_given?
    [status, headers, [content]]
  end



  def erb(filename, local = {})
    # b is a variable that represents the current binding. The strategy here is that we can 
    # pass something in as the local hash and store it in the message variable.
    # once we do that, we can pass the binding to the result method.
    # the end result will be that the result method will have access to the value in the 
    # message variable because we passed it the binding b. 
    b = binding
    message = local[:message]
    template = File.read("views/#{filename}.erb")
    ERB.new(template).result(b)
  end
end