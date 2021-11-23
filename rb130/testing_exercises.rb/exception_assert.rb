require 'minitest/autorun'
require 'minitest/reporters'
MiniTest::Reporters.use!
class Odd < MiniTest::Test
  # this syntax is right, but running the code fails because we haven't defined our
  # custom exception type. 
  def test_assert
    assert_raises(NoExperienceError) {employee.hire}
  end
end