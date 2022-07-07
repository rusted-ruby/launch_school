/*
  We've got some html and css on codepen. Need to write some code that 
  does different things.
    Links to articles take the user to that article
    user clicking an article adds a highlight class to it.
    anywhere else on the page, highlight is added to main element
  
  just for fun, lets do this one without jquery.
*/

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', handleDocumentClick);
  document.querySelector('ul').addEventListener('click', handleLinkClick);
  //ADD EVENt listeners to each of the article elements
  document.querySelectorAll('article').forEach((article) => {
    article.addEventListener('click', handleArticleClick);
  })
})

function toggleHighlight(eleToHighlight) {
  let currentHighlight = document.querySelector('.highlight');
  if (currentHighlight) {
    currentHighlight.classList.remove('highlight');
  }
  eleToHighlight.classList.add('highlight');
}

function handleDocumentClick(event) {
  event.preventDefault();
  toggleHighlight(document.querySelector('main'));
}


function handleLinkClick(event) {
  //event.preventDefault(); => let the default happen so we go to the article
  //stop propagation so we don't trigger the document click event.
  event.stopPropagation();
  if (!event.target instanceof HTMLAnchorElement) {
    return;
  } else {
    let articleId = event.target.getAttribute('href');
    let articleToHighlight = document.querySelector(`article${articleId}`);
    toggleHighlight(articleToHighlight)
  }
}

function handleArticleClick(event) {
  event.preventDefault();
  event.stopPropagation();
  //current target to get the article element the listener is hooked to.
  if (!event.currentTarget.classList.contains('highlight')) {
    toggleHighlight(event.currentTarget)
  }
}

/*
  Nice, this works! What did LS do? Particulary curious about what 
  they did for the event listeners to highlight the articles.

  So they just did it based on checking the tag name. if a user clicks
  the paragraph but it isn't exactly the article portion, the site gets
  the article element via the parentNode method. 
*/