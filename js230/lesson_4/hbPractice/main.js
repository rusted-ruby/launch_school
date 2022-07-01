/*
  What needs to be done here?
    first, create a template function from the template
    use the template function to render the template with an obj.
    post the template to the body element of the main html page. 
*/
Handlebars.registerPartial('tag', $('#tag').html());
let postTemplate = Handlebars.compile($('#post').html());

let posts = {
  posts: [
    {
      title: 'Lorem ipsum dolor sit amet',
      published: 'April 1, 2015',
      body: '<h1>This is a header</h1>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
      tags: ['blog', 'post', 'mane'],
    },
    {
      title: 'post numero dos',
      published: 'today',
      body: 'this is the body of the post. Its pretty short',
    }
  ]
};

$('main').append(postTemplate(posts));