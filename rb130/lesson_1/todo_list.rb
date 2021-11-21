# This class represents a todo item and its associated
# data: name and description. There's also a "done"
# flag to show whether this todo item is done.

class Todo
  DONE_MARKER = 'X'
  UNDONE_MARKER = ' '

  attr_accessor :title, :description, :done

  def initialize(title, description='')
    @title = title
    @description = description
    @done = false
  end

  def done!
    self.done = true
  end

  def done?
    done
  end

  def undone!
    self.done = false
  end

  def to_s
    "[#{done? ? DONE_MARKER : UNDONE_MARKER}] #{title}"
  end

  def ==(otherTodo)
    title == otherTodo.title &&
      description == otherTodo.description &&
      done == otherTodo.done
  end
end

# want to create a TodoList, which contains a collection of Todo objects.


# This class represents a collection of Todo objects.
# You can perform typical collection-oriented actions
# on a TodoList object, including iteration and selection.

class TodoList
  attr_accessor :title, :todos

  def initialize(title, todos = [])
    @title = title
    @todos = todos
  end

  def add(todo)
    raise TypeError.new("Can only add Todo Objects") if todo.class != Todo
    todos << todo
    todos
  end

  def size
    todos.size
  end

  def first
    todos.first
  end

  def last
    todos.last
  end

  def to_a
    # returns an array of all items in the list... do we want all objects?
    # or something more human readable? 
    todos
  end

  # returns true if all todos in the list are done. 
  def done?
    todos.all? do |todo|
      todo.done?
    end
  end

  def item_at(index)
    todos.fetch(index)
  end

  def mark_done_at(index)
    todos.fetch(index).done!
  end

  def mark_undone_at(index)
    todos.fetch(index).undone!
  end

  def done!
    todos.each do |todo|
      todo.done!
    end
  end

  def shift
    todos.shift
  end

  def pop
    todos.pop
  end

  def remove_at(index)
    todos.fetch(index)
    todos.delete_at(index)
  end

  def to_s
    str = ""
    todos.each do |todo|
      str = str + todo.to_s + "\n"
    end
    str
  end

  def each
    index = 0
    while index < todos.size
      yield(todos[index])
      index += 1
    end
    self
  end

  def select
    new_arr = []
    self.each do |todo|
      new_arr << todo if yield(todo)
    end
    TodoList.new("selected list", new_arr)
  end

  def find_by_title(string)
    # could also have used select here to return an array of todo objects with the 
    # title you wanted, then call Array#first on the array.
    result = nil
    self.each do |todo|
      if todo.title == string
        result = todo
        break
      end
    end
    result
  end

  def mark_done(string)
    result = find_by_title(string)
    result.done!
  end

  def all_done
    self.select do |todo|
      todo.done?
    end
  end

  def all_not_done
    self.select do |todo|
      !todo.done?
    end
  end

  def mark_all_done
    self.each do |todo|
      todo.done!
    end
  end

  def mark_all_undone
    self.each do |todo|
      todo.undone!
    end
  end

end

# create the toDo list class such that the following code all works

=begin
So... what do we need to implement here?
  add method
  size method
  first method
  last method
  to_a method
  done? method
  item_at method
  mark_done_at method
  done! method
  shift method
  pop method
  remove_at method
  to_s method
=end


# given
todo1 = Todo.new("Buy milk")
todo2 = Todo.new("Clean room")
todo3 = Todo.new("Go to gym")
list = TodoList.new("Today's Todos")

# ---- Adding to the list -----

# add
list.add(todo1)                 # adds todo1 to end of list, returns list
list.add(todo2)                 # adds todo2 to end of list, returns list
list.add(todo3)                 # adds todo3 to end of list, returns list
# list.add(1)                     # raises TypeError with message "Can only add Todo objects"

# <<
# same behavior as add

# ---- Interrogating the list -----

# size
p list.size                       # returns 3

# first
p list.first                      # returns todo1, which is the first item in the list

# last
p list.last                       # returns todo3, which is the last item in the list

#to_a
p list.to_a                      # returns an array of all items in the list

#done?
p list.done?                     # returns true if all todos in the list are done, otherwise false

# ---- Retrieving an item in the list ----

# item_at
#list.item_at                    # raises ArgumentError
p list.item_at(1)                 # returns 2nd item in list (zero based index)
# list.item_at(100)               # raises IndexError

# ---- Marking items in the list -----

# mark_done_at
# list.mark_done_at               # raises ArgumentError
list.mark_done_at(1)            # marks the 2nd item as done
#list.mark_done_at(100)          # raises IndexError

# mark_undone_at
# list.mark_undone_at             # raises ArgumentError
list.mark_undone_at(1)          # marks the 2nd item as not done,
# list.mark_undone_at(100)        # raises IndexError

# done!
list.done!                      # marks all items as done

# ---- Deleting from the list -----

# shift
# p list.shift                      # removes and returns the first item in list

# pop
# p list.pop                        # removes and returns the last item in list

# remove_at
# list.remove_at                  # raises ArgumentError
list.remove_at(1)               # removes and returns the 2nd item
# list.remove_at(100)             # raises IndexError

# ---- Outputting the list -----

# to_s
puts list.to_s                      # returrns string representation of the list

# ---- Today's Todos ----
# [ ] Buy milk
# [ ] Clean room
# [ ] Go to gym

# or, if any todos are done

# ---- Today's Todos ----
# [ ] Buy milk
# [X] Clean room
# [ ] Go to gym

puts "each stuff is here"

todo1 = Todo.new("Buy milk")
todo2 = Todo.new("Clean room")
todo3 = Todo.new("Go to gym")

list = TodoList.new("Today's Todos")
list.add(todo1)
list.add(todo2)
list.add(todo3)

list.each do |todo|
  puts todo                   # calls Todo#to_s
end

puts "select stuff is here" 
todo1 = Todo.new("Buy milk")
todo2 = Todo.new("Clean room")
todo3 = Todo.new("Go to gym")

list = TodoList.new("Today's Todos")
list.add(todo1)
list.add(todo2)
list.add(todo3)

todo1.done!

results = list.select { |todo| todo.done? }    # you need to implement this method

puts results.inspect # => should return an array with the buy milk todo object. 

puts "-------------------------------------------"
puts "the things for the newest methods are here"
puts "------------------------------------------"
p list.find_by_title("Buy milk")
p list
p "all done"
p list.all_done
p "all not done"
p list.all_not_done
p 
=begin
p "mark Clean room as done"
list.mark_done("Clean room")
p list
=end
p "mark all todos as done"
list.mark_all_done
p list
p "mark all as un done"
list.mark_all_undone
p list