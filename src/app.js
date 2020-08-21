const app = {
  title: "Let's get this started",
  subtitle: 'This is how we start the indecision app'
}

const App = () => {
  return (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle}</p>
    </div>
  );
}

const appRoot = document.querySelector('#app');

ReactDOM.render(<App/>, appRoot);