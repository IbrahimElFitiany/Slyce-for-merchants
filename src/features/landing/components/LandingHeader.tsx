import { useState } from "react";

function LandingHeader() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      id="nav"
      className="z-10 flex h-18 w-full items-center justify-between bg-[#FFFAF0] px-4 md:px-68 py-8 font-[InterVariable] text-base text-accent"
    >
      <div id="logo" className="flex items-center text-lg font-medium tracking-tight">
        <img src="/images/greenLogo.png" alt="" className="size-13" />
        <p className="hidden md:block">for Merchant</p>
      </div>

      <ul id="nav-links" className="hidden space-x-11 text-base font-semibold md:flex">
        <li>
          <a
            href="#"
            className="transition-all duration-150 hover:border-b-1 hover:border-[#4CB050]"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#"
            className="transition-all duration-150 hover:border-b-1 hover:border-[#4CB050]"
          >
            Business Types
          </a>
        </li>
        <li>
          <a
            href="#"
            className="transition-all duration-150 hover:border-b-1 hover:border-[#4CB050]"
          >
            Questions
          </a>
        </li>
        <li>
          <a
            href="#"
            className="transition-all duration-150 hover:border-b-1 hover:border-[#4CB050]"
          >
            Contact
          </a>
        </li>
      </ul>

      <div id="buttons" className="flex h-10 items-center space-x-5 font-bold">
        <button className="flex h-full items-center justify-around gap-3 rounded-full border border-[#4CB050] px-1 py-1">
          <svg width="28px" height="28px" viewBox="0 0 73.768 73.768" xmlns="http://www.w3.org/2000/svg" fill="#4CB050"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="Path_10" data-name="Path 10" d="M117.606,385.2a36.884,36.884,0,1,0,36.884,36.884A36.926,36.926,0,0,0,117.606,385.2Zm33.846,35.383H136.366a48.681,48.681,0,0,0-3.047-16.068,36.786,36.786,0,0,0,8.781-5.808A33.752,33.752,0,0,1,151.452,420.586Zm-32.346-31.072a36.534,36.534,0,0,1,6.069,6.387,39.467,39.467,0,0,1,4.176,7.028,33.843,33.843,0,0,1-10.245,2.061Zm3.534-.935a33.762,33.762,0,0,1,17.292,8.051,33.809,33.809,0,0,1-7.772,5.116A41.252,41.252,0,0,0,122.64,388.579ZM110.19,395.9a36.615,36.615,0,0,1,5.916-6.261v15.35a33.789,33.789,0,0,1-10.116-2.013A39.5,39.5,0,0,1,110.19,395.9Zm-7.013,5.906a33.8,33.8,0,0,1-7.9-5.177,33.757,33.757,0,0,1,17.469-8.074A41.244,41.244,0,0,0,103.177,401.807Zm12.929,6.183v12.6H102a45.607,45.607,0,0,1,2.835-14.838A36.83,36.83,0,0,0,116.106,407.99Zm0,15.6v12.386a36.8,36.8,0,0,0-11.018,2.146A42.373,42.373,0,0,1,102,423.587Zm0,15.386v15.252a47.106,47.106,0,0,1-9.792-13.361A33.819,33.819,0,0,1,116.106,438.973Zm-2.86,16.708a33.755,33.755,0,0,1-18.084-8.24,33.786,33.786,0,0,1,8.306-5.426A48.955,48.955,0,0,0,113.246,455.681Zm5.86-1.313v-15.4a33.8,33.8,0,0,1,9.922,1.94A47.081,47.081,0,0,1,119.106,454.368Zm12.762-12.294a33.846,33.846,0,0,1,8.182,5.367,33.759,33.759,0,0,1-17.909,8.217A48.888,48.888,0,0,0,131.868,442.074Zm-12.762-6.1V423.587h14.257a42.352,42.352,0,0,1-3.106,14.582A36.818,36.818,0,0,0,119.106,435.973Zm0-15.386v-12.6a36.806,36.806,0,0,0,11.4-2.291,45.562,45.562,0,0,1,2.854,14.888ZM93.112,398.711a36.8,36.8,0,0,0,8.91,5.871A48.7,48.7,0,0,0,99,420.587H83.76A33.757,33.757,0,0,1,93.112,398.711ZM83.76,423.587H99a45.675,45.675,0,0,0,3.256,15.683A36.807,36.807,0,0,0,93,445.35,33.755,33.755,0,0,1,83.76,423.587Zm58.447,21.764a36.8,36.8,0,0,0-9.122-6.022,45.69,45.69,0,0,0,3.279-15.742h15.088A33.759,33.759,0,0,1,142.207,445.351Z" transform="translate(-80.722 -385.203)" fill="#4CB050"></path> </g></svg>
          <p className="pr-3 text-2xl">EN</p>
        </button>
        <button className="h-full rounded-full flex items-center bg-[#4CB050] px-7 py-3 text-white">
          Login
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#4CB050] p-2"
        >
          {isOpen ? <div>x</div> : <div>=</div>}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-svh w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <ul className="flex flex-col p-6 space-y-6">
          <li><a href="#" className="text-lg font-semibold">Pricing</a></li>
          <li><a href="#" className="text-lg font-semibold">Business Types</a></li>
          <li><a href="#" className="text-lg font-semibold">Questions</a></li>
          <li><a href="#" className="text-lg font-semibold">Contact</a></li>
        </ul>
      </div>
    </div>

  );
}

export default LandingHeader;
