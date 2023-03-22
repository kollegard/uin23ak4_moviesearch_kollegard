import Moviecards from "./Moviecards";
import Searchresults from "./Searchresults";

export default function Layout({data, setMovie}){
    return(
    <body>
        <header>
            <h1>James Bond library</h1>
        </header>
        <nav>
            <Searchresults data={data} setMovie={setMovie}/>
        </nav>
        <main>
            <Moviecards/>
        </main>
    </body>
    )
}