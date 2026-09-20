import { Link } from "react-router";
import { MdMovie } from "react-icons/md";

const Header = () => {
  return (
    <header className="w-full absolute left-0 top-0 z-50 px-2 py-4 bg-purple-400 flex justify-between items-center">
      <div className="flex items-center gap-1.5">
        <Link to="/" className="cursor-pointer">
          <MdMovie className="w-6 h-6" />
        </Link>
        <h2 className="text-xl font-semibold">MovieExplorer</h2>
      </div>
      <Link to="/movies">
        <button className="border-2 border-purple-200 py-1 px-5 rounded-lg text-lg font-medium cursor-pointer">Movies</button>
      </Link>
    </header>
  );
};

export default Header;
