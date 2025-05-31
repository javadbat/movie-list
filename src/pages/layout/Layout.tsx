import { Outlet } from "react-router"
import './layout.css';
import { Header } from "./header/Header";


function Layout() {
  return (
    <div id="Layout">
      <Header />
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout