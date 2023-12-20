import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setTrainerName } from "../store/slices/trainerName.slice";
import Footer from "../components/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setTrainerName(e.target.trainerName.value))
    navigate("/pokedex")
  }


  return (
    <main className="flex justify-center flex-col  h-screen w-screen max-w-[1280px] mx-auto">
      <div className="flex justify-center flex-col  h-screen">
        <div className="flex flex-col items-center ">
          <div>
            <img className="w-[600px] mb-12  text-center" src="/img/image.png" alt="logo" />
          </div>
          <h1 className="text-red-500 text-[50px] text-center font-bold ">Hello trainer!</h1>
          <p className="text-[24px]">Write your name to start...</p>
          <form className="shadow-lg flex flex-wrap justify-center" onSubmit={handleSubmit}>
            <input
              className=" pl-6 py-3 pr-20"
              name="trainerName"
              type="text"
              placeholder="Your name..."
              required
            />
            <button className="text-white bg-red-600 p-6 px-12 text-lg" type="submit">Start</button>
          </form>
        </div>
      </div>
      <Footer />



    </main>
  )
}
export default Home