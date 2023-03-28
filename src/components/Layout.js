import Moviecards from "./Moviecards";
import Searchresults from "./Searchresults";

export default function Layout({movie, setSok}){

    movie?.map((p) => (p.imdbID))

    const more = async(sok) =>{
        const response = await fetch (`http://www.omdbapi.com/?i=${p.imdbID}&type=movie&apikey=3416d26d`)
        const detail = await response.json()
        
        console.log(detail)
    
        }
        more()

    return(
    <div id="body">
        <header>
            <h1>Movie library</h1>
        </header>
        <nav>
            <Searchresults setSok={setSok}/>
        </nav>
        <main>

            {movie?.map((p, index) => (<Moviecards 
                                        Title={p.Title} 
                                        key={index}
                                        img ={p.Poster}
                                        year = {p.Year}
                                        id = {p.imdbID}/>))}

            {detail?.map((d, index) => (<Moviecards
                                        director={d.Director}/>))}
        </main>
    </div>
    
    )
}