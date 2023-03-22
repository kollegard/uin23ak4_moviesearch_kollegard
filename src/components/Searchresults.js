export default function Searchresults({setMovie}){

    const sokeFelt = (e) => {
        const inputName = e.target.name
        const inputValue = e.target.value
        console.log(e.target.value)
        setMovie((prev) => ({...prev, [inputName]: inputValue}))
        // hentet fra koden som ble gjort i forelesningen 06.03.2023
    }

    return(
        <form>
            <label htmlFor="search"></label>
            <input name="search" id="search" placeholder="Søk etter film" type="text" onChange={sokeFelt}></input>
        
            <button type="submit" onClick={sokeFelt}>Søk</button>
        </form>
    )
}