require 'minitest/autorun'

require_relative 'text'

class TestText < MiniTest::Test
  def setup
    @file = File.open('sample_text.txt')
    @text = Text.new(@file.read)
    @file_text = @file.read
  end

  def test_swap
    new_text = @text.swap('a', 'e')
    expected_text = <<~TEXT.chomp
    Lorem ipsum dolor sit emet, consectetur edipiscing elit. Cres sed vulputete ipsum.\r
    Suspendisse commodo sem ercu. Donec e nisi elit. Nullem eget nisi commodo, volutpet\r
    quem e, viverre meuris. Nunc viverre sed messe e condimentum. Suspendisse ornere justo\r
    nulle, sit emet mollis eros sollicitudin et. Etiem meximus molestie eros, sit emet dictum\r
    dolor ornere bibendum. Morbi ut messe nec lorem tincidunt elementum vitee id megne. Cres\r
    et verius meuris, et pheretre mi.
    TEXT
    assert_equal(expected_text, new_text)
  end

  def test_word_count
    assert_equal(72, @text.word_count)
  end

  def teardown
    @file.close
    puts "file has been closed: #{@file.closed?}"
  end
end