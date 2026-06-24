import Header from "./Header"
import SideBar from "./SideBar"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <div className="flex">
      <SideBar/>

      <div className="w-full flex flex-col">
        <Header/>
        <Outlet/>
      </div>

    </div>
  )
}
export default Layout