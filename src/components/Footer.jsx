import React from "react";
import { MdMovie } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="w-full px-2 py-4 bg-purple-400 flex justify-between items-center">
      <div className="w-1/8 flex items-center gap-1.5">
        <Link to="/" className="cursor-pointer">
          <MdMovie className="w-6 h-6" />
        </Link>
        <h2 className="text-xl font-semibold">MovieExplorer</h2>
      </div>
      <div>
        <h2 className="text-base font-normal">
          © 2026 MovieExplorer,
        </h2>
      </div>
      <Link
        to="https://github.com/parvez365"
        target="_blank"
        className="w-1/8 flex justify-end py-1 text-lg font-medium cursor-pointer"
      >
        <FaGithub className="w-6 h-6" />
      </Link>
    </footer>
  );
};

export default Footer;
