const app = {
  title: "Let's get this started",
  subtitle: 'This is how we start the indecision app',
  options: ['one', 'two']
}


// const multiplier = {
//   numbers: [2,4,6,8,6],
//   multiplyBy: 2,
//   multiply() {
//     return this.numbers.map((number) => number * this.multiplyBy)
//   }
// };

// console.log(multiplier.multiply())

const App = () => {
  return (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <ol>
        <li>Item {app.options[0]}</li>
        <li>Item {app.options[1]}</li>
      </ol>
    </div>
  );
}

let count =0;
const addOne = () => {
  count ++
  renderCounterApp()
  // console.log('addOne')
}
const minusOne = () => {
  count --
  renderCounterApp()
  // console.log('minusone')
}

const reset = () => {
  count = 0;
  renderCounterApp()
  // console.log('reset')
}



const renderCounterApp = () => {
  const AppTwo = () => {
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
      </div>
    )
  }
  ReactDOM.render(<AppTwo/>, appRoot);
}

const appRoot = document.querySelector('#app');

renderCounterApp()

