import React from 'react';
import { useState, useEffect} from 'react';

const CRYPTO_PRICES_API_BASE_URL =
  'https://dummyjson.com/comments';


export default function CryptoPrices() {

  const [CryptoData, setCryptoData] = useState({});

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const data = await fetch(CRYPTO_PRICES_API_BASE_URL);
      const json = await data.json();
      setCryptoData(json);
      console.log(CryptoData)
    }

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [])


  return (
    <>
      <div className="tile">
        <tbody>
          <tr>
              <th>User Id</th>
              <th>Id</th>
              <th>Title</th>
          </tr>
          {CryptoData.comments?.map((item, i) => (
              <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.body}</td>
                  <td>{item.postId}</td>
              </tr>
          ))}
        </tbody>
      </div>
    </>
  );
}
