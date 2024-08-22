
import {BrowserRouter, Router, Route, Link} from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react';
import Navbar from '../components/navbar';

function Home() {
  const [data, setData] = useState([])

  const fetchAPI = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setData(response.data)
  }

  useEffect(() => {
    fetchAPI()
  },[])

  console.log(data);

  return (
    <div className="home">
      <Navbar/>
      <section className="banner">
        Banner
      </section>
      
      <section>
        <div className='container'>

          <div>
            {
              data.map((item, index) => {
                return (
                  <div className="postlist" key={index}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                  </div>
                );
              })
            }
          </div>
        
          </div>
      </section>
    </div>
  );
}

export default Home;
