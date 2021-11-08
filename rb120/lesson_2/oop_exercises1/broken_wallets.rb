class Wallet
  include Comparable

  def initialize(amount)
    @amount = amount
  end

  def <=>(other_wallet)
    amount <=> other_wallet.amount
  end

  protected
  attr_reader :amount
end
# change this code so it works
# don't make the amount in the wallet accessable to any method that isn't in the 
# wallet class. 
bills_wallet = Wallet.new(500)
pennys_wallet = Wallet.new(465)
if bills_wallet > pennys_wallet
  puts 'Bill has more money than Penny'
elsif bills_wallet < pennys_wallet
  puts 'Penny has more money than Bill'
else
  puts 'Bill and Penny have the same amount of money.'
end

=begin
So, first, what's wrong with this code. What does it do?
Well, it doesn't have any getter methods for amount. We'll need to create a protected one.
=end