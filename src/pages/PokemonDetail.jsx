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
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(({ data }) => setPokemonInfo(data))
      .catch((error) => console.log(error))
  }, [])

  const gradientByType = {
    grass: "bg-gradient-to-b from-green-500 from-10% via-lime-200 to-emerald-500",
    water: "bg-gradient-to-b from-blue-500 to-blue-300",
    ground: "bg-gradient-to-b from-slate-800 from-10% via-slate-500 to-slate-700",
    fire: "bg-gradient-to-b from-red-600 from-5% via-amber-400 to-orange-100 to-95%",
    Fighting: "bg-gradient-to-b from-red-600 from-5% via-amber-400 to-orange-100 to-95%",
    poison: "bg-gradient-to-b from-fuchsia-500 from-5% via-fuchsia-400 to-fuchsia-100 to-95%",
    bug: "bg-gradient-to-b from-emerald-500 from-5% via-amber-400 to-emerald-100 to-95%",
    normal: "bg-gradient-to-b from-pink-800 from-5% via-red-800 to-pink-900 to-95%",
    fairy: "bg-gradient-to-b from-orange-950 from-5% via-amber-400 to-orange-100 to-95%",
    electric: "bg-gradient-to-b from-yellow-700 from-5% via-amber-500 to-yellow-100 to-95%"
  }
  const borderByType = {
    grass: "border-green-500",
    water: "border-blue-500",
    ground: "border-slate-500",
    fire: "border-red-500",
    figther: "border-orange-800",
    poison: "border-purple-800",
    bug: "border-emerald-500",
    normal: "border-fuchsia-950",
    fairy: "border-fuchsia-950",
    electric: "border-yellow-500"
  }
  const txtByType = {
    grass: "text-green-500",
    water: "text-blue-500",
    ground: "text-slate-500",
    fire: "text-red-500",
    figther: "text-orange-800",
    poison: "text-purple-800",
    bug: "text-emerald-500",
    normal: "text-fuchsia-950",
    fairy: "text-fuchsia-950",
    electric: "text-yellow-500"
  }

  return (
    <section>
      <Header />
      <div className="text-center max-w-[600px] mx-auto">
        <header className={`${gradientByType[pokemonInfo?.types[0].type.name]} h-28`}>
          <img className="w-[200px] relative -top-24 mt-24 left-[50%] -translate-x-[50%]" src={pokemonInfo?.sprites.other["official-artwork"].front_default} alt="" />
        </header>
        <div className="mt-3">
          <span className={`${txtByType[pokemonInfo?.types[0].type.name]} border-slate-300 border-2 p-2 text-lg`}># {pokemonInfo?.id}</span>
          <div className="flex justify-between items-center">
            <hr className="w-screen bg-slate-200 h-1 mx-2" />
            <h3 className={`${txtByType[pokemonInfo?.types[0].type.name]} text-[40px] capitalize`}>{pokemonInfo?.name}</h3>
            <hr className="w-screen bg-slate-200 h-1 mx-2" />
          </div>
          <div className="flex justify-around w-[30%] mx-auto">
            <div>
              <h6 className="text-[12px]">Weight</h6>
              <span className="text-[12px]">{pokemonInfo?.weight}</span>
            </div>
            <div>
              <h6 className="text-[12px]">Height</h6>
              <span className="text-[12px]">{pokemonInfo?.height}</span>
            </div>
          </div>
        </div>
        {/* TYPE-SKILLS */}
        <section className="flex justify-around">
          <div>
            <h4>Type</h4>
            <p className="capitalize text-sm font-light border border-slate-500 p-1 px-12">
              {
                pokemonInfo?.types.map((type) => type.type.name).join(" / ")
              }
            </p>
           
          </div>
          <div>
            <h4>Skills</h4>
            <p className="capitalize text-sm font-light border border-slate-500 p-1 px-12">
              {
                pokemonInfo?.abilities.map((abilities) => abilities.ability.name).join(" / ")
              }
            </p>
          </div>
        </section>
        <section>
          <h4 className="text-start text-[28px] my-6">Stats</h4>
          <ul className="grid gap-2 capitalize font-light">
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
                      className="h-full bg-gradient-to-r from-yellow-400 to-orange-500"></div>
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