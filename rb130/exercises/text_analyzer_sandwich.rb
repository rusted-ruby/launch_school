class TextAnalyzer
  def process
    # open a file
    file = File.open('sample_text.txt', 'r')
    # yield to the block
    yield(file.read)
    # close the file
    file.close
  end
end

analyzer = TextAnalyzer.new
# count paragraphs
analyzer.process  { |text| puts "#{text.split("\r\n\r\n").count} paragraphs"}
# count lines
analyzer.process { |text| puts "#{text.split("\n").count} lines"}
# count words
analyzer.process {|text| puts "#{text.split(" ").count} words"}