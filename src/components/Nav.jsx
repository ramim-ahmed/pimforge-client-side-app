import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="py-5 border-b">
      <div className="max-w-6xl mx-auto px-3 flex justify-between items-center">
        <Link to="/">
          <h1 className="font-bold text-xl">PIM FORGE</h1>
        </Link>
        <div className="flex space-x-6 items-center">
          <div className="flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-themeColor text-white px-3 duration-300 py-1 rounded"
                  : "duration-300 py-1 px-3"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/queries"
              className={({ isActive }) =>
                isActive
                  ? "bg-themeColor text-white px-3 duration-300 py-1 rounded"
                  : "duration-300 px-3 py-1"
              }
            >
              Queries
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "bg-themeColor text-white px-3 duration-300 py-1 rounded"
                  : "duration-300 py-1 px-3"
              }
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
