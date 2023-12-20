import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../components/Header"

const PokemonDetail = () => {
  const [pokemonInfo, setPokemonInfo] = useState(null)
  const { id } = useParams()
  const getBarProgress = (stat_value) => {
    const percent = (stat_value * 100) / 255;
    return percent + "%"
  }
  useEffect (()=>{
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(({ data }) => setPokemonInfo(data))
    .catch((error) => console.log(error))
  },[])

  return (
    <section>
      <Header />
      <div className="text-center max-w-[600px] mx-auto">
        <header>
          <img src={pokemonInfo?.sprites.other["official-artwork"].front_default} alt="" />
        </header>
        <span>#1{pokemonInfo?.id}</span>
        <h3>PokemName</h3>
        <div>
          <div>
            <h5>Weight</h5>
            <span>{pokemonInfo?.weight}</span>
          </div>
          <div>
            <h5>Height</h5>
            <span>{pokemonInfo?.height}</span>
          </div>
        </div>
        <section>
          <h4>Stats</h4>
          <ul className="grid gap-2">
            {
              pokemonInfo?.stats.map((stat) => 
              <li key={stat.stat.name}>
                <div className="flex justify-between">
                  <h5>{stat.stat.name}</h5>
                  <span>{stat.base_stat}/255</span>
                </div>
                <div className="h-6 bg-slate-300 rounded-sm overflow-hidden">
                  <div style={{
                    width: getBarProgress(stat.base_stat)
                  }}
                  className="h-full bg-gradient-to-r from-orange-500 to-yellow-400"></div>
                </div>
              </li>)
            }
          </ul>
        </section>
      </div>
    </section>
  )
}
export default PokemonDetail