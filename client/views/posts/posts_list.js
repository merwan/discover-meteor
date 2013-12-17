var postsData =[
{
  title: 'Google calendar',
  author: 'Google calendar team',
  url: 'http://www.google.com/calendar'
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

