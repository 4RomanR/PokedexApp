import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="relative bottom-0">
            <Link to={`/pokedex/`}>
                <div className="h-12 bg-red-600">
                    <img className="relative top-5 left-[50%] -translate-x-[50%] w-[60px]" src="/img/pokeb.png" alt="" />
                </div>
                <div className="h-10 w-screen bg-black"></div>
            </Link>
        </footer>
    )
}
export default Footer