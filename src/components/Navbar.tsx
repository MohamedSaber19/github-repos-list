import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gray-200 text-black flex justify-center">
      <nav className="container h-16 w-full flex items-center relative p-4 lg:p-8 shadow-sm">
        <a href="/">
          <img
            src="/github-logo.png"
            alt="logo"
            width={60}
            height={60}
            className="p-2"
          />
        </a>
        <div className="ml-auto">
          <ul className="flex">
            <li className="my-0 mx-4">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-yellow-500"
                    : isActive
                    ? "text-purple-700 font-bold"
                    : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-yellow-500"
                    : isActive
                    ? "text-purple-700 font-bold"
                    : ""
                }
                to="/bookmarked"
              >
                Bookmarks
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
