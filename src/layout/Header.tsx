import { HelpIcon } from "@/components/icons/HelpIcon"
import { NotificationIcon } from "@/components/icons/NotificationIcon"
import { useLocation } from "react-router-dom"
import { BranchSelect } from "./BranchSelect"

const TITLES: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/orders": "Orders",
  "/performance": "Performance",
  "/reviews": "Reviews",
  "/promotions": "Promotions",
  "/payments": "Payments",
  "/menu": "Menu",
  "/opening-times": "Opening Times",
  "/settings": "Settings",
}

function Header() {

  const { pathname } = useLocation()
  const normalizedPath = pathname.toLowerCase()
  const activePageTitle = TITLES[normalizedPath] || "Dashboard"

  return (
    <div className="flex w-full items-center justify-between py-5">

      {/* page title & branch selection */}
      <div className="flex flex-col gap-y-1">
        <p className="text-4xl text-brand-black font-bold">{activePageTitle}</p>
        <BranchSelect/>
      </div>

      <div className="flex gap-x-5">

        <button className="cursor-pointer flex justify-between items-center border-1 font-medium text-lg border-brand-grey px-3 py-1 rounded-full">
          <HelpIcon/>
          <p className="ml-1">Help</p>
        </button>

        <button className="cursor-pointer flex items-center justify-center w-10 h-10 border-1 border-brand-grey rounded-full">
          <NotificationIcon/>
        </button>

        <button className="cursor-pointer w-10 h-10 border border-brand-grey rounded-full overflow-hidden">
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRZc7Z-74fAPVZ3bCLnuYyDb-XhPI-rb9MwcL1d00Sq8B0G_pqijHUMBPGRJeojWLzoUcwygcpIRlBQNHuOwfYzMCF2k1-bkAuJGAicNQ"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </button>

      </div>

    </div>
  )
}
export default Header