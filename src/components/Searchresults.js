import { useState } from "react"

export default function Searchresults({setMovie}){

    const [sok, setSok] = useState([])

    const sokeFelt = (e) => {
        const inputName = e.target.name
        const inputValue = e.target.value
        // console.log(e.target.value)
        setSok((prev) => ({...prev, [inputName]: inputValue}))
        // hentet fra koden som ble gjort i forelesningen 06.03.2023
    }

    // {data.filter((p) => (p.title.includes("hei")))}

    // console.log(sok)

    return(
        <form>
            <label htmlFor="search"></label>
            <input name="search" id="search" placeholder="Søk etter film" type="text" onChange={sokeFelt}></input>
        
            <button type="submit" onClick={sokeFelt}>Søk</button>
        </form>
    )
}