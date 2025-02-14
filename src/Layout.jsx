import MobileNav from "./components/mobile-nav";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <MobileNav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
