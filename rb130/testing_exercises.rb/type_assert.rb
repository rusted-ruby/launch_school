require 'minitest/autorun'
require 'minitest/reporters'
MiniTest::Reporters.use!
class Odd < MiniTest::Test 
  def test_assert
    value = 1
    assert_instance_of(Integer, value)
  end
end