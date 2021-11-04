=begin
https://launchschool.com/exercises/facfe405
How to do this one? 

input = odd integer n that's > 7
output = 8 pointed star printed to the screen
middle row of the star is "*" * 7
each other row of the star has three *s in it.
first rows from center have no spaces
second rows from center have 1 space
third rows from center have 2 spaces
4th rows from center have 3 spaces
etc etc. 

0 _ * 2 _ * 2_ * 0_
1 _ * 1_ * 1_ * 1_
2_ * 0_ * 0_ * 2_

So we've got to think about outer spaces and inner spaces.
As we move toward the center, outer spaces increase and inner spaces decrease
as we move away from the center, outer spaces decrease and inner spaces increase. 
We can have multipliers for the outer and inner spaces that are defined as a function of 
distance from center, and use math expressions to build the strings 

when we start out, inner_mult = n/2 -1 and outer_mult = 0 

two loops - one that takes us from the top od the star to the center
one line to print the center
one loop to take us from the center to the botom of the star
=end

def star(n)
  outer_mult = 0
  inner_mult = (n/2) - 1
  1.upto(n/2) do
    string = " " * outer_mult + "*" + " " * inner_mult + "*" + " " * inner_mult + "*" + " " * outer_mult
    p string
    outer_mult += 1
    inner_mult -= 1
  end
  p "*" * n
  outer_mult -= 1
  inner_mult += 1
  1.upto(n/2) do 
    string = " " * outer_mult + "*" + " " * inner_mult + "*" + " " * inner_mult + "*" + " " * outer_mult
    p string
    outer_mult -= 1
    inner_mult += 1
  end
  ""
end

p star(7)
p star(9)
p star(11)

=begin
So that general system works... but how can I make it better? is it possible to do it in one
iteration? 
have one var for the center (n/2.0 . ceil). 
distance from center is abs(center - iteration number)

Should be possible to do this... just need to come up with a relationship between 
the outer and inner multipliers, n and the distance from the center.

outer_mult = (n/2) - distance from center
inner_mult = distance from center - 1 

so what about when distance = 0? just have a special case for that.
=end

def elegant_stars(n)
  center = (n/2.0).ceil
  1.upto(n) do |iter_number|
    distance = (center - iter_number).abs
    if distance == 0
      p "*" * n
    else
      outer_mult = (n/2) - distance
      inner_mult = distance - 1
      p " " * outer_mult + "*" + " " * inner_mult + "*" + " " * inner_mult + "*" + " " * outer_mult
    end
  end
  nil
end
elegant_stars(7)
elegant_stars(9)
elegant_stars(11)
elegant_stars(19)
p 
p 
p 
elegant_stars(115)

# another way to solve this would have been to build an array of 3 *s, then use join 
# with a set number of spaces as the multiplier, since the number of inner spaces is 
# consistent on each row. Then you just call center to get the outer spaces for you.