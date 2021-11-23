require 'minitest/autorun'

require_relative 'transaction'

class TestTransaction < MiniTest::Test
  def setup
    @transaction = Transaction.new(47)
  end

  def test_prompt_for_payment
    input = StringIO.new("47\n")
    output = StringIO.new
    @transaction.prompt_for_payment(input: input, output: output)
    assert_equal(47, @transaction.amount_paid)
  end
end