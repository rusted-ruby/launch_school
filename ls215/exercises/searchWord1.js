/*
return how many times a word appears in a string of text.
assume that ALL word breaks are spaces

that's easy. split along spaces, iterate through the array and see if the current word
matches the term. note that the term is case insensitive. 

looks like launch school did this by creating a new regex object out of the term.
they also added the global and case insensitive flags to it and then used match to return an
array of all instances of the search term. 
*/

function searchWord(term, text) {
  let result = 0;
  text.split(' ').forEach((word) => {
    if (term.toLowerCase() === word.toLowerCase()) {
      result += 1
    }
  })
  console.log(result)
  return result
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

searchWord('sed', text);      // 3

function searchWord2(word, text) {
  const regex = new RegExp(word, 'gi');
  const matches = text.match(regex);

  return matches ? matches.length : 0;
}