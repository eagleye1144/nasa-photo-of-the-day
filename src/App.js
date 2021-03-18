import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Photo from './Photo'
function App() {

  const [photoInfo, setPhotoInfo] = useState ([])

  useEffect(() =>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=8TvaiyQBihkMfxgJ0tmn9RmN6IdzPTEsRxN5Xi2Y')
      .then(res=>{
        setPhotoInfo(res.data)
        console.log(res.data)
      })
      .catch( err =>{
       console.log(err, "ERROR")
      })


  } , [])
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <Photo photoInfo = {photoInfo.url}/>
    </div>
  );
}

export default App;
