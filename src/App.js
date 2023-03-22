import { useEffect, useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import Moviecards from './components/Moviecards';
import Searchresults from './components/Searchresults';

function App() {

  const [data, setData] = useState([])
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const info = async() =>{
    const response = await fetch ('http://www.omdbapi.com/?s=james+bond&apikey=3416d26d')
    const data = await response.json()
    setMovie(data.articles)
    
    console.log(data)

    }

    info()
  })   
      
  
  return (

      <Layout data={data} setMovie={setMovie}/>

  );
}

export default App;
