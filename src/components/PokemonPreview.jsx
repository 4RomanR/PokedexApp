import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PokemonPreview = ({ pokemonURL }) => {
    const [pokemonInfo, setPokemonInfo] = useState(null)
    useEffect(() => {
        axios
          .get(pokemonURL)
    
          .then(({ data }) => setPokemonInfo(data))
          .catch((error) => console.log(error));
      }, [pokemonURL]);
      const gradientByType = {
        grass:"bg-gradient-to-b from-green-500 from-10% via-lime-200 to-emerald-500" ,
        water:"bg-gradient-to-b from-blue-500 to-blue-300",
        ground:"bg-gradient-to-b from-slate-800 from-10% via-slate-500 to-slate-700",
        fire:"bg-gradient-to-b from-red-600 from-5% via-amber-400 to-orange-100 to-95%",
        Fighting:"bg-gradient-to-b from-red-600 from-5% via-amber-400 to-orange-100 to-95%",
        poison:"bg-gradient-to-b from-fuchsia-500 from-5% via-fuchsia-400 to-fuchsia-100 to-95%",
        bug:"bg-gradient-to-b from-emerald-500 from-5% via-amber-400 to-emerald-100 to-95%",
        normal:"bg-gradient-to-b from-pink-800 from-5% via-red-800 to-pink-900 to-95%",
        fairy:"bg-gradient-to-b from-orange-950 from-5% via-amber-400 to-orange-100 to-95%",
        electric:"bg-gradient-to-b from-yellow-700 from-5% via-amber-500 to-yellow-100 to-95%"
      }
      const borderByType = {
        grass:"border-green-500" ,
        water:"border-blue-500",
        ground:"border-slate-500",
        fire:"border-red-500",
        figther:"border-orange-800",
        poison:"border-purple-800",
        bug:"border-emerald-500",
        normal:"border-fuchsia-950",
        fairy:"border-fuchsia-950",
        electric:"border-yellow-500"
      }
      const txtByType = {
        grass:"text-green-500" ,
        water:"text-blue-500",
        ground:"text-slate-500",
        fire:"text-red-500",
        figther:"text-orange-800",
        poison:"text-purple-800",
        bug:"text-emerald-500",
        normal:"text-fuchsia-950",
        fairy:"text-fuchsia-950",
        electric:"text-yellow-500"
      }
  return (
    <Link to={`/pokedex/${pokemonInfo?.id}`} className={`border-8 rounded-lg ${borderByType[pokemonInfo?.types[0].type.name]} w-[260px] text-center grid gap-1`}>
        <header className={`${gradientByType[pokemonInfo?.types[0].type.name]}h-[50px] mb-9 `}>
            <img className="relative -bottom-9 w-[120px] mx-auto pt-2" src={pokemonInfo?.sprites.other["official-artwork"].front_default} alt="" />
        </header>
        <h3 className="capitalize text-lg font-bold">{pokemonInfo?.name}</h3>
        <h4 className="capitalize text-sm font-semibold">
            {
                pokemonInfo?.types.map((type) => type.type.name).join("/")
            }
        </h4>
        <h5 className="text-slate-500">Types</h5>
        <section>
            <ul className="grid grid-cols-2 gap-3 p-2">
            {
                pokemonInfo?.stats.map((stat) => (
                <li key={stat.stat.name}>
                    <h5 className="uppercase text-xs text-slate-500">{stat.stat.name}</h5>
                    <span className={`${txtByType[pokemonInfo?.types[0].type.name]}font-bold`}>{stat.base_stat}</span>
                </li>))
            }

            </ul>
        </section>
    </Link>
  )
}
export default PokemonPreview