import { Link } from "react-router";

const Home = () => {
  return (
    <main className='relative z-0 hero-bg h-dvh'>
      <div className="absolute left-0 top-0 w-full h-dvh bg-purple-500/30">
        <div className="absolute top-1/2 left-1/2 -translate-1/2 text-center w-1/2">
          <h2 className="text-5xl font-bold text-fuchsia-100">DISCOVER MOVIES</h2>
          <p className="mt-6 mb-16 text-lg font-medium text-fuchsia-200">Explore and discover your favorite movies from around the world.</p>
          <Link to="/movies">
            <button className="border-2 border-purple-200 py-1 px-5 rounded-lg text-lg font-medium text-fuchsia-100 cursor-pointer">Explore Now</button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Home;