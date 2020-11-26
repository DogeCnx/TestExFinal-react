import React,{useState,useEffect} from 'react'




function PokemonDataFetch() {

  const [APIkeys ,setAPIkeys ] = useState('https://pokeapi.co/api/v2/pokemon')

  const [ data,setData] = useState('')

  async function fetchData(APIkey) {
    const respon = await fetch(APIkey);
    return respon.json();
  }
  async function CallData(APIkey) {
    const dataAPI = await fetchData(APIkey)
    await setData(dataAPI)
  }
  
  useEffect( async () => {
     await CallData(APIkeys)
  } ,[])

  const handleClickNext = async () => {
    setAPIkeys(data.next)
    await CallData(APIkeys)
  }
  const handleClickBack = async () => {
    setAPIkeys(data.previous)
    await CallData(APIkeys)
  }

  return (
    <div>Pokemon data fetching<br/>
    {data.next}
        {/* <ul>
          {  data.results.map( ( item ) => {
            <li> {item.name}</li>
          }) }
        </ul> */}
        <button onClick={handleClickNext}>Next</button>
        <button onClick={handleClickBack}>Back</button>
    </div>
    
  )
}

export default PokemonDataFetch;
