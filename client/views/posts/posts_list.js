var postsData =[
{
  title: 'Introducing Telescope',
  author: 'Sacha Greif',
  url: 'http://www.cnrs.fr/'
},
{
  title: 'Meteor',
  author: 'Tom Jones',
  url: 'http://www.uefa.fr/'
},
{
  title: 'Introducing Kickass',
  author: 'Joe Jonhson',
  url: 'http://www.fifa.fr/'
}
];
Template.postsList.helpers({
  posts: postsData
});

