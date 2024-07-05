import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
export function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
