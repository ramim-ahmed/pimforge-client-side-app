import useAuth from "@/hooks/useAuth";
import { Link, NavLink } from "react-router-dom";
import UserProfile from "./UserProfile";
import ThemeMode from "./ThemeMode";

export default function Nav() {
  const { authUser } = useAuth();
  return (
    <nav className="py-3 border-b">
      <div className="max-w-6xl mx-auto px-3 flex justify-between items-center">
        <Link to="/">
          <h1 className="font-bold lg:text-xl text-base">PIM FORGE</h1>
        </Link>
        <div className="flex lg:space-x-6 space-x-3 items-center">
          <div className="flex lg:space-x-6">
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
            {authUser ? (
              <UserProfile />
            ) : (
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
            )}
          </div>
          <div>
            <ThemeMode />
          </div>
        </div>
      </div>
    </nav>
  );
}
