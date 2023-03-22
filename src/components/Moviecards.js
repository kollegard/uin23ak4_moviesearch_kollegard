
export default function Moviecards({data}){


    return(
        <>
          {data.map((p) => (<p>{p.Search.Title}</p>))}
        </>
    )
}