import { GlobeIcon } from "@/components/icons/GlobeIcon";
import { NavLink } from "react-router-dom";

function LandingHeader() {

  const pageNavlist:string[] = [
    "Pricing",
    "Business Types",
    "Questions",
    "Contact"
  ]

  return (
    <div
      id="nav"
      className="z-10 flex h-18 w-full items-center justify-between bg-whitebg px-68 py-8 text-accent"
    >
      <NavLink to={"/"} className="flex items-center text-lg font-medium tracking-tight">
        <img src="/images/greenLogo.png" alt="" className="size-13" />
        <p>for Merchant</p>
      </NavLink>

      <ul className="hidden space-x-11 text-base font-semibold md:flex">
        {pageNavlist.map(nav => {

          return (
            <li key={nav}>
              <a href="#" className="transition-all duration-150 hover:border-b-1 hover:border-[#4CB050]">
                {nav}
              </a>
            </li>
          )

        })}
      </ul>

      <div className="flex h-10 items-center space-x-5 font-bold">

        <button className=" cursor-pointer flex h-full items-center gap-x-2 px-3.5 rounded-full border border-accent py-1">
          <GlobeIcon size={20}/>
          <p>EN</p>
        </button>

        <NavLink to={"/login"} className="h-full rounded-full flex items-center bg-accent px-7 py-3 text-white">
          Login
        </NavLink>

      </div>

    </div>

  );
}

export default LandingHeader;