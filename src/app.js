const app = {
  title: "Let's get this started",
  subtitle: 'This is how we start the indecision app',
  options: ['one', 'two']
}

const App = () => {
  return (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length > 0 ? <p>'Here are your options' {app.options[0]}</p> : <p>'No options'</p>}
    </div>
  );
}

const appRoot = document.querySelector('#app');

ReactDOM.render(<App/>, appRoot);