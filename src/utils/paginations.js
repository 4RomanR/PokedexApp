const paginatePokemons = (pokemons, currentPage) => {
    //Cantidad de pokemons por página
    const POKEMON_PER_PAGE = 12;

    //Pokemons a renderizar
    const sliceEnd = currentPage * POKEMON_PER_PAGE;
    const sliceStart =  sliceEnd - POKEMON_PER_PAGE;
    const pokemonsInCurrentPage = pokemons.slice(sliceStart, sliceEnd )
    
    //Ultima página o la cantidad de páginas
    const lastPage = Math.ceil(pokemons.length / POKEMON_PER_PAGE)

    //Bloque actual
    const PAGES_PER_BLOCK = 5
    const actualBlock = Math.ceil(currentPage / PAGES_PER_BLOCK)

    //Paginas que se van a mostrar en el bloque actual
    const pagesInCurrentBlock = []
    const maxPage = actualBlock * PAGES_PER_BLOCK;
    const minPage = maxPage - PAGES_PER_BLOCK + 1;

    for(let i = minPage; i <= maxPage; i++){
        if(i <= lastPage){
            pagesInCurrentBlock.push(i)
        }
    }
    return {
        pokemonsInCurrentPage,
        lastPage,
        pagesInCurrentBlock
    }
}

export { paginatePokemons }