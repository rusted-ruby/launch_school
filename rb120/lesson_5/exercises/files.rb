class File
  attr_accessor :name, :byte_content

  def initialize(name)
    @name = name
  end

  alias_method :read,  :byte_content
  alias_method :write, :byte_content=

  def copy(target_file_name)
    target_file = self.class.new(target_file_name)
    target_file.write(read)

    target_file
  end

  def to_s
    "#{name}.#{self.class::FORMAT}"
  end
end

class MarkdownFile < File
  FORMAT = :md
end

class VectorGraphicsFile < File
  FORMAT = :svg
end

class MP3File < File
  FORMAT = :mp3
end

# Test

blog_post = MarkdownFile.new('Adventures_in_OOP_Land')
blog_post.write('Content will be added soon!'.bytes)

copy_of_blog_post = blog_post.copy('Same_Adventures_in_OOP_Land')

puts copy_of_blog_post.is_a? MarkdownFile     # true
puts copy_of_blog_post.read == blog_post.read # true

puts blog_post
p File.ancestors

=begin
You get an error when you run this. What's happening? 
Problem is that when you try to puts the blog_post, you look for a FORMAT constant
Constants have lexical scope, so you need to tell Ruby where the constant should get its value.
As is, the code will look for a value of FORMAT in the File class, AND ALL OF ITS ANCESTORS
But we want it to look in the MarkdownFile class first. 
To help with this, we should change the call to FORMAT in File#to_s to self.class::FORMAT

=end