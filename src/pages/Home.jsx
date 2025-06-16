import FindMe from "../components/FindMe"
import Hero from "../components/Hero"
import Info from "../components/Info"

const Home = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-red">
      <Hero/>
      <Info/>
      <FindMe/>
    </div>
  )
}

export default Home