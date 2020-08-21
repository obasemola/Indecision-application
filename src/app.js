var template = (
<div>
  <h1>Does this change</h1>
  <p>This is some info</p>
</div>
);
var appRoot = document.querySelector('#app');

const templateTwo = (
  <div>
    <h1>Ayodele Obasemola</h1>
    <p>Age: 30</p>
    <p>Location: Kristiansand</p>
  </div>
)

ReactDOM.render(templateTwo,appRoot);

console.log('app is running')