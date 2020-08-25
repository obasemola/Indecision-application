'use strict';

var app = {
  title: "Let's get this started",
  subtitle: 'This is how we start the indecision app',
  options: ['one', 'two']

  // const multiplier = {
  //   numbers: [2,4,6,8,6],
  //   multiplyBy: 2,
  //   multiply() {
  //     return this.numbers.map((number) => number * this.multiplyBy)
  //   }
  // };

  // console.log(multiplier.multiply())

};var App = function App() {
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
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      'ol',
      null,
      React.createElement(
        'li',
        null,
        'Item ',
        app.options[0]
      ),
      React.createElement(
        'li',
        null,
        'Item ',
        app.options[1]
      )
    )
  );
};

var count = 0;
var addOne = function addOne() {
  count++;
  renderCounterApp();
  // console.log('addOne')
};
var minusOne = function minusOne() {
  count--;
  renderCounterApp();
  // console.log('minusone')
};

var reset = function reset() {
  count = 0;
  renderCounterApp();
  // console.log('reset')
};

var renderCounterApp = function renderCounterApp() {
  var AppTwo = function AppTwo() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Count: ',
        count
      ),
      React.createElement(
        'button',
        { onClick: addOne },
        '+1'
      ),
      React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
      ),
      React.createElement(
        'button',
        { onClick: reset },
        'reset'
      )
    );
  };
  ReactDOM.render(React.createElement(AppTwo, null), appRoot);
};

var appRoot = document.querySelector('#app');

renderCounterApp();
