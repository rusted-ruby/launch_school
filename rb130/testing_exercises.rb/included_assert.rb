require 'minitest/autorun'
require 'minitest/reporters'
MiniTest::Reporters.use!
class Odd < MiniTest::Test
  def test_assert
    list = ['xyz', 123]
    assert_includes(list, 'xyz')
  end
end