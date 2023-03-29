import { useEffect, useState } from 'react';
import './App.css';
import './css/main.css'
import Layout from './components/Layout';

function App() {

  const [movie, setMovie] = useState([])
  const [sok, setSok] = useState("james bond")
  const [firstRender, setFirstRender] = useState(true)

  const info = async(sok) =>{
    const response = await fetch (`http://www.omdbapi.com/?s=${sok}&?i=tt3732110&type=movie&apikey=3416d26d`)
    const data = await response.json()
    setMovie(data.Search)
    //tatt inspirasjon fra forelesningen 06.03.2023
    
    // console.log(data)

    }


  useEffect(() => {
    if (firstRender) {
      info(sok)
      setFirstRender(false)
    }
    //fikk veiledning av studentassistent til kodebiten over

    if (sok.length >= 3) {
      info(sok)
    }
    
  },[sok])   
      
  
  return (

      <Layout movie={movie} setMovie={setMovie} sok={sok} setSok={setSok}/>
  );
}

export default App;
