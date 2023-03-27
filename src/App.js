import { useEffect, useState } from 'react';
import './App.css';
import Layout from './components/Layout';

function App() {

  const [data, setData] = useState([])
  const [movie, setMovie] = useState([])
  const [sok, setSok] = useState("james bond")
  const [firstRender, setFirstRender] = useState(true)

  const info = async(sok) =>{
    const response = await fetch (`http://www.omdbapi.com/?s=${sok}&type=movie&apikey=3416d26d`)
    const data = await response.json()
    setMovie(data.Search)
    
    console.log(data)

    }


  useEffect(() => {
    console.log(sok, sok.length)
    if (firstRender) {
      info(sok)
      setFirstRender(false)
    }

    if (sok.length >= 3) {
      info(sok)
    }
    
  },[sok])   
      
  
  return (

      <Layout movie={movie} setMovie={setMovie} sok={sok} setSok={setSok}/>
  );
}

export default App;
