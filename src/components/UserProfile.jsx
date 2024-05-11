import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useAuth from "@/hooks/useAuth";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
export default function UserProfile() {
  const { authUser, logout } = useAuth();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center space-x-3">
            <img
              src={authUser?.photoURL}
              className="w-10 border border-themeColor h-10 rounded-full object-cover"
              alt=""
            />
            <h3 className="font-medium">Hi, {authUser?.displayName}</h3>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-52">
          <Link to="/add-querie">
            <DropdownMenuItem>
              <Button variant="outline" className="w-full">
                Add Querie
              </Button>
            </DropdownMenuItem>
          </Link>
          <Link to="/my-queries">
            <DropdownMenuItem>
              <Button variant="outline" className="w-full">
                My Queries
              </Button>
            </DropdownMenuItem>
          </Link>
          <Link to="/my-recommendations">
            <DropdownMenuItem>
              <Button variant="outline" className="w-full">
                My Recommendations
              </Button>
            </DropdownMenuItem>
          </Link>
          <Link to="/recommendations-for-me">
            <DropdownMenuItem>
              <Button variant="outline" className="w-full">
                Recommendations For Me
              </Button>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>
            <Button
              onClick={() => logout()}
              variant="outline"
              className="w-full"
            >
              Logout
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
