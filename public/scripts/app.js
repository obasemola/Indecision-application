'use strict';

var app = {
  title: "Let's get this started",
  subtitle: 'This is how we start the indecision app'
};

var App = function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'p',
      null,
      app.subtitle
    )
  );
};

var appRoot = document.querySelector('#app');

ReactDOM.render(React.createElement(App, null), appRoot);
