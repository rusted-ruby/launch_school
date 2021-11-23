# write a minitest assertion that will fail if value.odd? is not true
require 'minitest/autorun'
require 'minitest/reporters'
MiniTest::Reporters.use!
class Odd < MiniTest::Test
  def test_odd_bool
    value = 2
    assert_equal(value.odd?, true)
  end
end