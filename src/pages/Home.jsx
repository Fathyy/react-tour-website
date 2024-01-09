import { main } from "../assets"
import { Hero } from "../components"

const Home = () => {
  return (
    <>
    <div>
      <div className="relative h-[700px]">
        <video autoPlay loop muted className="absolute
        right-0 top-0 h-[700px] w-full object-cover z-[-1]">
          <source src={main} type="video/mp4"/>

        </video>
        <Hero/>
      </div>
    </div>
    </>
  )
}

export default Home