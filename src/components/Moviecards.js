import placeholder from './placeholder.png'

export default function Moviecards({Title, img, year}){


    return(
        <article>
          <h2>{Title}</h2>
          <img src= {img != "N/A" ? img : `${placeholder}`} alt={`Poster for ${Title}`}/>
          <p>{year}</p>

        </article>
    )
}