import { useEffect, useState } from "react"
import { paginatePokemons } from "../utils/paginations"
import Pagination from "./Pagination"
import PokemonPreview from "./PokemonPreview"

const PokemonList = ({ pokemons }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const { lastPage, pagesInCurrentBlock, pokemonsInCurrentPage } = paginatePokemons(pokemons, currentPage)
  useEffect(()=>{
    setCurrentPage(1)
  }, [pokemons])
  
  return (
    <section>
      <section className="flex gap-3 flex-row justify-around flex-wrap">
        {
          pokemonsInCurrentPage.map((pokemon) => (
            <PokemonPreview key={pokemon.url} pokemonURL={pokemon.url} />
        ))}
      </section>
      <Pagination 
       lastPage={lastPage}
       pagesInCurrentBlock={pagesInCurrentBlock}
       setCurrentPage={setCurrentPage}
       currentPage={currentPage}
       />

    </section>
  )
}
export default PokemonList