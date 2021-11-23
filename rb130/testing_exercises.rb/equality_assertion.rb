require 'minitest/autorun'
require 'minitest/reporters'
MiniTest::Reporters.use!
class Odd < MiniTest::Test
  def test_assert
    value = 'XyZ'
    assert_equal(value.downcase, 'xyz')
  end
end