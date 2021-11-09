class KrispyKreme
  def initialize(filling_type, glazing)
    filling_type = "Plain" if filling_type == nil
    @filling_type = filling_type
    @glazing = glazing
  end
  def to_s
    if @glazing
      "#{@filling_type} with #{@glazing}"
    else
      @filling_type
    end
  end
end

donut1 = KrispyKreme.new(nil, nil)
donut2 = KrispyKreme.new("Vanilla", nil)
donut3 = KrispyKreme.new(nil, "sugar")
donut4 = KrispyKreme.new(nil, "chocolate sprinkles")
donut5 = KrispyKreme.new("Custard", "icing")

puts donut1
puts donut2
puts donut3
puts donut4
puts donut5

# how did LS do this one? They made use of the tenary operator here instead of an if else
# statement. They also didn't save the default "plain" value within the instance variable. 