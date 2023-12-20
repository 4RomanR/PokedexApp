import { useEffect, useState } from "react"
import PokemonList from "../components/PokemonList"
import axios from "axios"
import { useSelector } from "react-redux"
import Header from "../components/Header"

const Pokedex = () => {
  const [allPokemon, setAllPokemon] = useState([])
  const trainerName = useSelector((store) => store.trainerName.name)
  const [pokemonName, setPokemonName] = useState("")
  const [types, setTypes] = useState([])
  const pokemonByName = allPokemon.filter((pokemon)=> pokemon.name.includes(pokemonName))


  const handleSubmit = (e) => {
    e.preventDefault()
    setPokemonName(e.target.pokemonName.value.toLowerCase().trim())

  }

  const handleChangeType = (e) => {
    const url = e.target.value
    axios
    .get(url)
    .then(({ data }) => {
      if(url.includes("type")){
        const pokemonsResume = data.pokemon.map((pokemon) => pokemon.pokemon)
        setAllPokemon(pokemonsResume)
      } else {
        setAllPokemon(data.results)
      }
    })
    .catch((error) => console.log(error))
  };
  useEffect(() =>{
    axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=1292 ")
    .then(({ data }) => setAllPokemon(data.results))
    .catch((error) => console.log(error))
  }, [])
  useEffect(() =>{
    axios
    .get("https://pokeapi.co/api/v2/type ")
    .then(({ data }) => setTypes(data.results))
    .catch((error) => console.log(error))
  },[])
  return (
    <section className="w-screen max-w-[1280px] mx-auto">
      <Header />
      <main className="mx-2 my-6">
        <p className="text-slate-600">
          <b className="text-red-600">Welcome {trainerName}</b>, here can you find your Pokemon
        </p>
        <form className="flex flex-wrap justify-evenly my-6" onSubmit={handleSubmit}>
          <div className="flex flex-wrap justify-center shadow-lg">
            <input className=" pl-6 py-3 pr-20" type="text" name="pokemonName" placeholder="Search pokemon... "/>
            <button className="text-white bg-red-600 p-6 px-12 text-lg">Search</button>
          </div>
          <select className="shadow-lg pl-6 py-3 pr-20 m-3 bg-white" onChange={handleChangeType}>
            <option className="bg-white" value="https://pokeapi.co/api/v2/pokemon?limit=1292">All pokemons</option>
            {
              types.map((type) => (
              <option value={type.url} className="capitalize bg-white" key={type.name}>{type.name}</option>
              ))
            }
          </select>
        </form>

        <PokemonList pokemons={pokemonByName} />
      </main>
    </section>
  )
}
export default Pokedex