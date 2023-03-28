import placeholder from './placeholder.png'

export default function Moviecards({Title, img, year, id}){


  const more = async(sok) =>{
    const response = await fetch (`http://www.omdbapi.com/?i=${id}&type=movie&apikey=3416d26d`)
    const detail = await response.json()
    
    console.log(detail)

    }
    
    more()

    return(
        <article>
          <h2>{Title}</h2>
          <img src= {img !== "N/A" ? img : `${placeholder}`} alt={`Plakat for ${Title}`}/>
          <p>{year}</p>
          <p>{id}</p>

        </article>
    )
}