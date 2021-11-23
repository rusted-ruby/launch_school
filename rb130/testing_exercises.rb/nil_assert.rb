require 'minitest/autorun'
require 'minitest/reporters'
MiniTest::Reporters.use!
class Odd < MiniTest::Test
  def test_assert
    value = nil
    assert_nil(value)
  end
end