const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];

const usersItems = users.map((user) => <li key= {user.id}>{user.name}</li>)

function App() {
  return (
    <>
      <h3>User names</h3>
      <ul>{usersItems}</ul>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
