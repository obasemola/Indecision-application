'use strict';

var app = {
  title: "Let's get this started",
  subtitle: 'This is how we start the indecision app',
  options: ['one', 'two']
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
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    app.options.length > 0 ? React.createElement(
      'p',
      null,
      '\'Here are your options\' ',
      app.options[0]
    ) : React.createElement(
      'p',
      null,
      '\'No options\''
    )
  );
};

var appRoot = document.querySelector('#app');

ReactDOM.render(React.createElement(App, null), appRoot);
