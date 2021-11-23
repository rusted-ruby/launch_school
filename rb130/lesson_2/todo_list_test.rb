require 'minitest/autorun'
require "minitest/reporters"
require 'simplecov'
SimpleCov.start
Minitest::Reporters.use!

require_relative 'todo_list'

class TodoListTest < MiniTest::Test

  def setup
    @todo1 = Todo.new("Buy milk")
    @todo2 = Todo.new("Clean room")
    @todo3 = Todo.new("Go to gym")
    @todos = [@todo1, @todo2, @todo3]

    @list = TodoList.new("Today's Todos")
    @list.add(@todo1)
    @list.add(@todo2)
    @list.add(@todo3)
  end

  def test_to_a
    assert_equal(@todos, @list.to_a)
  end

  def test_size
    assert_equal(@todos.size, @list.size)
  end

  def test_first
    assert_equal(@todo1, @list.first)
  end

  def test_last
    assert_equal(@todo3, @list.last)
  end

  def test_shift
    # test the return value of shift
    assert_equal(@todo1, @list.shift)
    # test that TodoList#shift mutates the array of todo objects
    @todos.shift
    assert_equal(@todos, @list.todos)
  end

  def test_pop
    # test the return value of pop
    assert_equal(@todo3, @list.pop)
    # test aht TodoList#pop mutates the array of todo objects
    @todos.pop
    assert_equal(@todos, @list.todos)
  end

  def test_done?
    # first, test that its false at first, since all items are not done
    assert_equal(@list.done?, false)
    # next, test that its working right once all the items are done
    @list.done!
    assert_equal(@list.done?, true)
  end

  # make sure that the code raises a TypeError if we try to add a non-todo object to our list
  def test_type_error
    assert_raises(TypeError) {@list.add(3)}
  end

  # make sure our add method actually adds a todo object to the list
  def test_add_todo
    @todo4 = Todo.new("Test code")
    @list.add(@todo4)
    assert_equal([@todo1, @todo2, @todo3, @todo4], @list.todos)
  end

  def test_shovel_todo
    @todo4 = Todo.new("Test code")
    @list << @todo4
    assert_equal([@todo1, @todo2, @todo3, @todo4], @list.todos)
  end

  # test that it adds an item, AND that it raises an index error correctly
  def test_item_at
    assert_equal(@todo3, @list.item_at(2))
    assert_raises(IndexError) {@list.item_at(4)}
    assert_raises(IndexError) {@list.item_at(-6)}
  end

  # test that it marks an item as done AND throws an index error correctly
  def test_mark_done_at
    @list.mark_done_at(0)
    assert_equal(true, @todo1.done?)
    assert_raises(IndexError) {@list.mark_done_at(4)}
    assert_raises(IndexError) {@list.mark_done_at(-6)}
  end

  # mark a todo as done, then mark it as undone.
  # also test exception raising
  def test_mark_undone_at
    @list.mark_done_at(0)
    assert_equal(true, @todo1.done?)
    @list.mark_undone_at(0)
    assert_equal(false, @todo1.done?)
    assert_raises(IndexError) {@list.mark_undone_at(4)}
    assert_raises(IndexError) {@list.mark_undone_at(-6)}
  end

  # this one should also raise an IndexError in certain situations...
  def test_remove_at
    @list.remove_at(1)
    assert_equal([@todo1, @todo3], @list.todos)
    assert_raises(IndexError) {@list.remove_at(2)}
    assert_raises(IndexError) {@list.remove_at(-3)}
  end

  # this one here is a little tricky - need to create a multiline string that's what
  # we expect, then call assert equals on it. 
  # this is called a HEREDOC - more info on it is here
  # https://ruby-doc.com/core/doc/syntax/literals_rdoc.html#label-Here+Documents
  def test_to_s
    expected_string = <<~OUTPUT.chomp
    ---- Today's Todos ----
    [ ] Buy milk
    [ ] Clean room
    [ ] Go to gym
    OUTPUT
    assert_equal(expected_string, @list.to_s)
  end

  def test_to_s_done
    expected_string = <<~OUTPUT.chomp
    ---- Today's Todos ----
    [ ] Buy milk
    [X] Clean room
    [ ] Go to gym
    OUTPUT
    @list.mark_done_at(1)
    assert_equal(expected_string, @list.to_s)
  end

  def test_to_s_all_done
    @list.mark_all_done
    expected_string = <<~OUTPUT.chomp
    ---- Today's Todos ----
    [X] Buy milk
    [X] Clean room
    [X] Go to gym
    OUTPUT
    assert_equal(expected_string, @list.to_s)
  end

  # want to test that each is iterating over all the todos... 
  def test_each
    test_arr = [@todo1, @todo2, @todo3]
    test_index = 0
    @list.each do |a_todo|
      assert_equal(a_todo, test_arr[test_index])
      test_index += 1
    end
  end

  # test that the each method returns the original object
  def test_each_return
    return_value = @list.each {}
    assert_equal(return_value, @list)
  end

  # test that select returns a brand new todoList object
  def test_select
    @list.mark_done_at(1)
    @list.mark_done_at(2)
    selected_list = @list.select do |a_todo|
      a_todo.done?
    end
    new_list = TodoList.new("selected list")
    new_list.add(@todo2)
    new_list.add(@todo3)
    assert_equal(new_list.todos, selected_list.todos)
    assert_instance_of(TodoList, selected_list)
  end

end