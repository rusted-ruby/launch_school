require "sinatra"
require "sinatra/reloader"
require "tilt/erubis"
require "erb"

before do 
  @contents = File.readlines("data/toc.txt")
end

helpers do 
  def formatChapter(text)
    textArray = text.split("\n\n");
    id = 0 
    formattedArray = textArray.map do |line|
      id += 1
      "<p id=#{id}>#{line}</p>"
    end
    formattedArray.join
  end

  def formatParagraph(text)
    # also could have easily done this with the gsub function
    splitParagraph = text.split(@searchTerm)
    #start at the first search term.
    finalText = splitParagraph[0]
    splitParagraph.each do |piece|
      #skip the first piece, or the first thing in our paragraph will be a bold search term
      next if piece == finalText 
      finalText = finalText + "<strong>" + @searchTerm + "</strong>" + piece
    end
    finalText
  end
end

def checkChapter(searchTerm, chapterNum)
  contents = File.read("data/chp" + chapterNum.to_s + ".txt")
  contents.include?(searchTerm)
end

get "/" do
  @title = "The Adventures of Sherlock Holmes"
  puts @contents
  erb :home
end

get "/chapters/:number" do
  @chapterNum = params['number']
  path = "data/chp" + @chapterNum + ".txt"
  @chapter = File.read(path)
  @chapterName = @contents[@chapterNum.to_i - 1]
  @title = "Chapter #{@chapterNum}"
  erb :chapter
end

get "/search" do
  @searchTerm = params['query']
  puts @searchTerm
  @titleSearchResults = []
  @paragraphSearchResults = []
  if @searchTerm != "" && @searchTerm != nil
    
    # get our initial data structure. 
    # title search results is an array. each element is a nested array of format 
    # [chapter title, chapter number]]
    count = 0
    @contents.each_with_index do |title, i|
      next unless checkChapter(@searchTerm, i + 1)
      @titleSearchResults[count] = [title, i + 1]
      count += 1
    end

    #get our next data structure
    #paragraph search results is a hash. each key is a chapter number
    #element is an array containint nested arrays of format [paragraph contents, paragraph ID]
    #there will be one nested array for each paragraph that matches on the search term
    @paragraphSearchResults = {}
    @titleSearchResults.each do |titleElement|
      chapterNum = titleElement[1]
      formattedChapterContents = formatChapter(File.read("data/chp" + chapterNum.to_s + ".txt"))
      chapterContentsArray = formattedChapterContents.split("</p>")
      count = 0
      paragraphMatchArray = []
      chapterContentsArray.each do |rawParagraph|
        next unless rawParagraph.include?(@searchTerm)
        firstPiece = rawParagraph.split("=")[1]
        secondPiece = firstPiece.split(">")
        id = secondPiece[0]
        paragraph = secondPiece[1]
        paragraphMatchArray[count] = [paragraph, id]
        count += 1
      end
      @paragraphSearchResults[chapterNum] = paragraphMatchArray
    end
  end
  erb :search
end

not_found do 
  redirect "/"
end




