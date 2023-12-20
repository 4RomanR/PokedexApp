import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-screen max-w-[1280px] mx-auto">
      <Link to={`/pokedex/`}>
        <div className="h-12 bg-red-600">

          <img className="relative w-[290px] top-1 left-9" src="/img/image.png" alt="pokedex logo" />
        </div>
      </Link>
      <div className="h-10 bg-black mb-6">
        <img className="relative w-[70px] -top-2 left-[80%] -translate-x-[20%]" src="/img/pokeb.png" alt="pokelogo" />
      </div>

    </header>
  )
}
export default Header