import { NavLink, Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div className="main">
      <div className="header">
        <header>
          <NavLink
            to="/albums"
            end={true}
            className={({ isActive }) => (isActive ? "link-active" : "")}
          >
            Albums
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) => (isActive ? "link-active" : "")}
          >
            Users
          </NavLink>
        </header>{" "}
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
