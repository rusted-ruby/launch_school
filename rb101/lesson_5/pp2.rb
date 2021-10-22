# order this array of hashes based on publication year from earliest to latest.
books = [
  {title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967'},
  {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925'},
  {title: 'War and Peace', author: 'Leo Tolstoy', published: '1869'},
  {title: 'Ulysses', author: 'James Joyce', published: '1922'}
]
# one loop to iter through the array
# another loop to check up on the hash contents to get the year
# convert the year to a string 
books_sort = books.sort_by do |element|
  element[:published].to_i
end
p books_sort