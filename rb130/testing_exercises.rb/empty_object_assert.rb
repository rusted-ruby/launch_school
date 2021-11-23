require 'minitest/autorun'
require 'minitest/reporters'
MiniTest::Reporters.use!
class Odd < MiniTest::Test
  def test_assert
    list = []
    assert_empty(list)
  end
end