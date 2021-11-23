require 'minitest/autorun'
require 'minitest/reporters'
MiniTest::Reporters.use!

require_relative 'cash_register'
require_relative 'transaction'

class CashRegisterTest < MiniTest::Test
  def setup
    @register = CashRegister.new(100)
    @transaction = Transaction.new(47)
  end

  def test_accept_money
    @transaction.amount_paid = 47
    @register.accept_money(@transaction)
    assert_equal(147, @register.total_money)
  end

  def test_change
    @transaction.amount_paid = 50
    assert_equal(3, @register.change(@transaction))
  end

  def test_give_receipt
    string = "You've paid $47.\n"
    assert_output(string) { @register.give_receipt(@transaction) }
  end
end