import { HelpIcon } from "@/components/icons/HelpIcon"
import { NotificationIcon } from "@/components/icons/NotificationIcon"
import { useLocation } from "react-router-dom"

type branch = {
  id:string,
  name: string
}

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

  const path = useLocation()
  const activePageTitle = TITLES[path.pathname]

  const restaurantBranches : branch[] =
  [
    {id: "1", name: "El Sherouk Branch"},
    {id: "2", name: "El Tagamo3 Branch"},
    {id: "3", name: "Main Branch"}
  ]


  return (
    <div className="flex w-full items-center justify-between py-5">

      <div className="flex flex-col gap-y-1">
        <p className="text-4xl text-brand-black font-bold">{activePageTitle}</p>

        <select className="text-accent text-base font-bold focus:outline-none">
          {restaurantBranches.map(b => {
            return (
              <option key={b.id} value={b.name}>{b.name}</option>
            )
          })}
        </select>

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