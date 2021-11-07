class Banner
  def initialize(message)
    @message = message
  end
  def to_s
    [horizontal_rule, empty_line, message_line, empty_line, horizontal_rule].join("\n")
  end

  private

  def horizontal_rule
    "+-" + "-" * @message.size + "-+"
  end

  def empty_line
    "| " + " " * @message.size + " |"
  end
  def message_line
    "| #{@message} |"
  end
end

# implement the method such that these things happen. 
# do not make implementation details public.
banner = Banner.new('To boldly go where no one has gone before.')
puts banner
=begin
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
=end
banner = Banner.new("")
puts banner
=begin
+--+
|  |
|  |
|  |
+--+
=end