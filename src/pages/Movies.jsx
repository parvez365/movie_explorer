import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

import Card from "../components/Card";
import { getMovies } from "../services/getMovies";
import { getSearch } from "../services/getSearch";

const Movies = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const value = await getMovies();
        setMovies(value);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await getSearch(search);
      setMovies(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-gray-900">
      <div className="pt-22 flex justify-center">
        <form onSubmit={handleSubmit} className="w-1/2 relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
            placeholder="Search movie..."
            className="w-full p-2 border-2 border-gray-300 rounded-lg outline-none text-base text-white placeholder:text-gray-200/25"
          />
          <button
            type="submit"
            className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer"
          >
            <IoSearch className="text-2xl text-white" />
          </button>
        </form>
      </div>
      <div className="py-8 flex flex-wrap justify-center gap-2.5">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default Movies;
