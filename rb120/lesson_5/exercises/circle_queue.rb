# queue is just an array object
# adding a value with <<
# remove a value with shift

class CircularQueue
  attr_reader :queue, :buffer_size

  def initialize(buffer_size)
    @queue = []
    @buffer_size = buffer_size
  end

  def enqueue(value)
    if queue.length < buffer_size
      queue << value 
    else
      dequeue
      queue << value
    end
  end

  # remove and return the oldest value from the queue. 
  def dequeue
    queue.shift
  end
end


# implement a Circular Queue class such that we return true here 15 times
# more details here - https://launchschool.com/exercises/1fcae291
queue = CircularQueue.new(3) # => buffer size of three
puts queue.dequeue == nil

queue.enqueue(1)
queue.enqueue(2)
puts queue.dequeue == 1

queue.enqueue(3)
queue.enqueue(4)
puts queue.dequeue == 2

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
puts queue.dequeue == 5
puts queue.dequeue == 6
puts queue.dequeue == 7
puts queue.dequeue == nil

queue = CircularQueue.new(4)
puts queue.dequeue == nil

queue.enqueue(1)
queue.enqueue(2)
puts queue.dequeue == 1

queue.enqueue(3)
queue.enqueue(4)
puts queue.dequeue == 2

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
puts queue.dequeue == 4
puts queue.dequeue == 5
puts queue.dequeue == 6
puts queue.dequeue == 7
puts queue.dequeue == nil