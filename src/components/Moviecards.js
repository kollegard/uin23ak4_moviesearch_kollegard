import { useEffect, useState } from 'react'
import placeholder from './placeholder.png'

export default function Moviecards({Title, img, year, id}){

  const [detail, setDetail] = useState("")

  const more = async() =>{
    const response = await fetch (`http://www.omdbapi.com/?i=${id}&type=movie&apikey=3416d26d`)
    const wait = await response.json()
    setDetail(wait)

    
    console.log(detail)

    }

    useEffect(()=>{
      more(detail)
    },[])
    

    return(
        <article>
          <h2>{Title}</h2>
          <img src= {img !== "N/A" ? img : `${placeholder}`} alt={`Plakat for ${Title}`}/>
          <p>Released: {detail.Released}</p>
          <p>{detail.Runtime}</p>

          <p>Director: {detail.Director}</p>
          <p>Actors: {detail.Actors}</p>


        </article>
    )
}