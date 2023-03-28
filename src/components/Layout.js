import Moviecards from "./Moviecards";
import Searchresults from "./Searchresults";

export default function Layout({movie, setMovie, info, sok, setSok}){
    return(
    <div id="body">
        <header>
            <h1>Movie library</h1>
        </header>
        <nav>
            <Searchresults movie={movie} 
                            setMovie={setMovie} 
                            info={info}
                            sok={sok}
                            setSok={setSok}/>
        </nav>
        <main>

            {movie?.map((p, index) => (<Moviecards 
                                        Title={p.Title} 
                                        key={index}
                                        img ={p.Poster}
                                        year = {p.Year}
                                        id = {p.imdbID}/>))}
        </main>
    </div>
    
    )
}