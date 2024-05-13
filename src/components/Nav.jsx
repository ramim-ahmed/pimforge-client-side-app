import { CiMenuFries } from "react-icons/ci";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, NavLink } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Button } from "./ui/button";
import ThemeMode from "./ThemeMode";

export default function Nav() {
  const { authUser, logout } = useAuth();
  const handleLogoutUser = () => {
    logout();
  };
  return (
    <nav className="py-3 border-b sticky top-0 bg-white dark:bg-[#020817] z-10">
      <div className="max-w-6xl mx-auto px-3 flex items-center">
        <div className="flex justify-between items-center flex-1 mr-4">
          <div className="flex items-center space-x-3 lg:space-x-0">
            <div className="lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <CiMenuFries className="w-6 h-6" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-60 font-archivo">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-themeColor cursor-pointer font-bold px-3 duration-300 py-1 rounded"
                        : "duration-300 px-3 py-1 cursor-pointer"
                    }
                  >
                    <DropdownMenuItem className="text-base">
                      Home
                    </DropdownMenuItem>
                  </NavLink>
                  <NavLink
                    to="/queries"
                    className={({ isActive }) =>
                      isActive
                        ? "text-themeColor cursor-pointer font-bold px-3 duration-300 py-1 rounded"
                        : "duration-300 px-3 py-1 cursor-pointer"
                    }
                  >
                    <DropdownMenuItem className="text-base">
                      Queries
                    </DropdownMenuItem>
                  </NavLink>
                  <NavLink
                    to="/my-queries"
                    className={({ isActive }) =>
                      isActive
                        ? "text-themeColor cursor-pointer font-bold px-3 duration-300 py-1 rounded"
                        : "duration-300 px-3 py-1 cursor-pointer"
                    }
                  >
                    <DropdownMenuItem className="text-base">
                      My Queries
                    </DropdownMenuItem>
                  </NavLink>
                  <NavLink
                    to="/my-recommendations"
                    className={({ isActive }) =>
                      isActive
                        ? "text-themeColor cursor-pointer font-bold px-3 duration-300 py-1 rounded"
                        : "duration-300 px-3 py-1 cursor-pointer"
                    }
                  >
                    <DropdownMenuItem className="text-base">
                      My Recommendations
                    </DropdownMenuItem>
                  </NavLink>
                  <NavLink
                    to="/recommendations-for-me"
                    className={({ isActive }) =>
                      isActive
                        ? "text-themeColor cursor-pointer font-bold px-3 duration-300 py-1 rounded"
                        : "duration-300 px-3 py-1 cursor-pointer"
                    }
                  >
                    <DropdownMenuItem className="text-base">
                      Recommendations For Me
                    </DropdownMenuItem>
                  </NavLink>
                  {!authUser && (
                    <>
                      <NavLink
                        to="/login"
                        className={({ isActive }) =>
                          isActive
                            ? "text-themeColor cursor-pointer font-bold px-3 duration-300 py-1 rounded"
                            : "duration-300 px-3 py-1 cursor-pointer"
                        }
                      >
                        <DropdownMenuItem className="text-base">
                          Login
                        </DropdownMenuItem>
                      </NavLink>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Link to="/">
              <h1 className="text-xl font-bold text-themeColor">PIM Forge</h1>
            </Link>
          </div>
          <div className="lg:flex hidden space-x-10 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-themeColor text-white px-3 duration-300 py-1 rounded"
                  : "duration-300 px-3 py-1"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/Queries"
              className={({ isActive }) =>
                isActive
                  ? "bg-themeColor text-white px-3 duration-300 py-1 rounded"
                  : "duration-300 px-3 py-1"
              }
            >
              Queries
            </NavLink>
            <NavLink
              to="/my-queries"
              className={({ isActive }) =>
                isActive
                  ? "bg-themeColor text-white px-3 duration-300 py-1 rounded"
                  : "duration-300 px-3 py-1"
              }
            >
              My Queries
            </NavLink>
            <NavLink
              to="/my-recommendations"
              className={({ isActive }) =>
                isActive
                  ? "bg-themeColor text-white px-3 duration-300 py-1 rounded"
                  : "duration-300 px-3 py-1"
              }
            >
              My Recommendations
            </NavLink>
            <NavLink
              to="/recommendations-for-me"
              className={({ isActive }) =>
                isActive
                  ? "bg-themeColor text-white px-3 duration-300 py-1 rounded"
                  : "duration-300 px-3 py-1"
              }
            >
              Recommendations For Me
            </NavLink>
          </div>
          {authUser ? (
            <div>
              <HoverCard>
                <HoverCardTrigger>
                  <img
                    src={authUser?.photoURL}
                    className="w-12 h-12 rounded-full object-cover border border-themeColor cursor-pointer"
                    alt=""
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <Button variant="outline" className="w-full">
                    {authUser?.displayName}
                  </Button>
                  <Button
                    onClick={() => handleLogoutUser()}
                    variant="outline"
                    className="w-full mt-2"
                  >
                    Logout
                  </Button>
                </HoverCardContent>
              </HoverCard>
            </div>
          ) : (
            <div className="flex items-center space-x-8">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-baseColor border-b border-baseColor font-semibold"
                    : ""
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "text-baseColor border-b border-baseColor font-semibold"
                    : ""
                }
              >
                Register
              </NavLink>
            </div>
          )}
        </div>
        <div className="">
          <ThemeMode />
        </div>
      </div>
    </nav>
  );
}
