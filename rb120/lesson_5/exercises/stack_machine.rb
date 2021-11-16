# https://launchschool.com/exercises/4b24c3b4
# create a class that implements the stack and register minilang exercise.
require "pry-byebug"
class Minilang
  attr_reader :commands
  attr_accessor :stack, :register

  def initialize(string)
    @commands = string.split
    @register = 0
    @stack = []
  end

  def eval
    commands.each do |command|
      # if command is numeric
      if command =~ /\A[-+]?\d+\z/
        self.register = command.to_i
        next
      end
      case command
      when "PUSH"  then push
      when "ADD"   then add
      when "SUB"   then sub
      when "MULT"  then mult
      when "DIV"   then div
      when "MOD"   then mod
      when "PRINT" then print
      when "POP"   then pop
      else              puts "Invalid token: #{command}"
      end
    end
  end

  def pop
    if stack == []
      puts "Empty stack!"
    else
      self.register = stack.pop
    end
  end

  def push
    stack << register
  end

  def add
    self.register = register + stack.pop
  end

  def sub
    self.register = register - stack.pop
  end

  def mult
    self.register = register * stack.pop
  end

  def div
    self.register = register / stack.pop
  end

  def mod 
    self.register = register % stack.pop
  end

  def print
    puts "#{register}"
  end
end

Minilang.new('PRINT').eval
# 0

Minilang.new('5 PUSH 3 MULT PRINT').eval
# 15

Minilang.new('5 PRINT PUSH 3 PRINT ADD PRINT').eval
# 5
# 3
# 8

Minilang.new('5 PUSH 10 PRINT POP PRINT').eval
# 10
# 5

Minilang.new('5 PUSH POP POP PRINT').eval
# Empty stack!

Minilang.new('3 PUSH PUSH 7 DIV MULT PRINT ').eval
# 6

Minilang.new('4 PUSH PUSH 7 MOD MULT PRINT ').eval
# 12

Minilang.new('-3 PUSH 5 XSUB PRINT').eval
# Invalid token: XSUB

Minilang.new('-3 PUSH 5 SUB PRINT').eval
# 8

Minilang.new('6 PUSH').eval
# (nothing printed; no PRINT commands)