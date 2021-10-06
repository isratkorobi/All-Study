import React from 'react';
import {useEffect, useState} from 'react';
import Banner from '../Banner/Banner';
import Home from '../Home/Home';
import './Homes.css';


const Homes = () => {
    const [homes ,setHomes] = useState([]);
    // useing UseState

    useEffect(() => {
      fetch('./fakeapi.json')
      .then(res => res.json())
      .then(data => setHomes(data.slice(0, 4)))
    },[]);
    // fetch data
    return (
      // home data
      <div>
        <Banner></Banner>
      <div className="popular-course pt-5 mt-5">
        <h1>Popular Online Courses</h1>
        <p>Rapidiously expedite granular imperatives before economically sound web services.<br /> Credibly actualize pandemic strategic themeplatform.</p>
  
      <div className="home-container">
          {
            homes.map(home =>
              <Home key={home?.id} home={home}></Home>
            )
          }
          {/* using map */}
      </div>
          </div>
          </div>
    );
};

export default Homes;
