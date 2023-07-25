import React from 'react';
import { useState, useEffect} from 'react';

const url = "https://jsonplaceholder.typicode.com/users/1";

function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const data = await fetch(url);
      const json = await data.json();
      setUserData(json);
    }

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [])


  // No need to touch code below
  return (
    <div className="App">
      <h2>User Data</h2>
      <p>
        <strong>Name: </strong>{" "}
        {userData.name || "(Need to populate name here)"}
      </p>
      <p>
        <strong>Website: </strong>
        {userData.website || "(Need to populate website here)"}
      </p>
      <p>
        <strong>Email: </strong>
        {userData.email || "(Need to populate email here)"}
      </p>
      <p>
        <strong>Phone: </strong>
        {userData.phone || "(Need to populate phone here)"}
      </p>
    </div>
  );
}

export default App;
