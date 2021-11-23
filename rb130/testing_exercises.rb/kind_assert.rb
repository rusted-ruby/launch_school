require 'minitest/autorun'
require 'minitest/reporters'
MiniTest::Reporters.use!
class Odd < MiniTest::Test 
  # test should fail if value is not Numeric, or one of Numeric's subclasses
  def test_assert
    value = 1
    assert_kind_of(Numeric, value)
  end
end