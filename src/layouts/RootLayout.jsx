import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <nav>
        <h1>Nav</h1>
      </nav>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
}
