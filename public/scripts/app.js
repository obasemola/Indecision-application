'use strict';

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Does this change'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  )
);
var appRoot = document.querySelector('#app');

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Ayodele Obasemola'
  ),
  React.createElement(
    'p',
    null,
    'Age: 30'
  ),
  React.createElement(
    'p',
    null,
    'Location: Kristiansand'
  )
);

ReactDOM.render(templateTwo, appRoot);

console.log('app is running');
