import DatePicker from './components/DatePicker';
import PostsList from './components/PostsList'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/react";
import './styles/App.css';

function App() {
  const [nasaData, setNasaData] = useState([])
  const [loading, setLoading] = useState(false)

  var days = 7;
  var date = new Date();
  var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
  var dd =last.getDate();
  var mm=last.getMonth()+1;
  var yyyy=last.getFullYear();
  
  let today = yyyy + '-' + mm + '-' + dd;

  const override = css`
  display: block;
  `;
  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };


  useEffect(() => {
    setLoading(true)
      
      const fetchData = async () => {
          const res = await axios(`https://api.nasa.gov/planetary/apod?api_key=1Y2SfiZHf815zobfXjpCT9j8cZ61KnndxItFUapp&start_date=${today}&end_date`)
          setNasaData(res.data)
          setLoading(false)
      }
      fetchData()
  }, [])


  if (loading) {
    return (
      <div style={style}>
        <MoonLoader size={150} css={override} />
      </div>
    )
  }

  return (
    <div className="">
      <DatePicker setNasaData={setNasaData} />
      <PostsList nasaData={nasaData} />
    </div>
  );
}

export default App;
