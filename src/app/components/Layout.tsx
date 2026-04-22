import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="min-h-screen font-['Inter',sans-serif]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
