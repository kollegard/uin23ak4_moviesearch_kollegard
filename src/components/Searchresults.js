
export default function Searchresults({setSok}){

    const handlesubmit = (e) => {
        e.preventDefault()
    }

    const sokeFelt = (e) => {
        setSok(e.target.value)
        // hentet fra koden som ble gjort i forelesningen 06.03.2023
    }

    return(
        <form onSubmit={handlesubmit}>
            <label htmlFor="search"></label>
            <input name="search" id="search" placeholder="Søk etter film" type="text" onChange={sokeFelt}></input>
        
            <button type="submit">Søk</button>
        </form>
    )
}