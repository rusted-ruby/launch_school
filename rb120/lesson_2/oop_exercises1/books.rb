class Book
  attr_reader :author, :title
  def initialize(author, title)
    @author = author
    @title = title
  end

  def to_s 
    %("#{title}", by #{author}")
  end
end

book = Book.new("Mark E Danielewski", "House of Leaves")
puts %(the author of "#{book.title}" is #{book.author}".)
puts %(book = #{book}.)

=begin
expected output:
The author of "House of Leaves" is Mark E Danielewski
book = "House of leaves", by Mark E Danielewski.

What will it output at first? Nothing, there's no getter methods for title or author instance
variables... we also need to call puts on the book object > no we don't, not since
the book instance is already within a puts statement on line 15... kind of weird, but okay. 
=end