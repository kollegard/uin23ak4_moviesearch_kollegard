
export default function Searchresults({setSok}){

    const handlesubmit = (e) => {
        e.preventDefault()
    }

    const sokeFelt = (e) => {
        
        /*if(sok.length >= 3){
        const inputName = e.target.name
        setSok(e.target.value)}*/
        setSok(e.target.value)
        


        // hentet fra koden som ble gjort i forelesningen 06.03.2023
    }

    

    // {movie.filter((f) => (f.Title.includes({sok}).map((r) => <Moviecards Title={r.Title}/>)))}
    // {movie.filter(f => sok.includes(f))}

    return(
        <form onSubmit={handlesubmit}>
            <label htmlFor="search"></label>
            <input name="search" id="search" placeholder="Søk etter film" type="text" onChange={sokeFelt}></input>
        
            <button type="submit">Søk</button>
        </form>
    )
}