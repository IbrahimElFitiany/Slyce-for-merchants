function SideBar() {
  return (
    <aside className="w-[260px] sticky top-0 flex flex-col justify-between px-3 py-5 h-screen bg-whitebg border-r-1 border-brand-grey">
      <div>

        <div id="top-bar" className="flex items-center justify-center">
          <div id="Logo" className="flex justify-center items-center">
            <img src="/images/greenLogo.png" alt="logo" className="w-15 h-15" />
            <p className="font-medium text-xl tracking-tight text-accent">for Merchant</p>
          </div>
        </div>

        <div id="sections" className="flex flex-col my-10 gap-5 tracking-tight">

          <section id="Monitor-your-performance">
            <h5 className="text-[#6E6E6E] text-xs font-semibold mb-2">Monitor your performance</h5>

            <ul className="flex flex-col font-semibold text-brand-black gap-1.5 text-lg ">
              <li className="flex gap-2 items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="none"
                    stroke="#333"
                    viewBox="0 -0.5 25 25"
                  >
                    <g
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      clipRule="evenodd"
                    >
                      <path d="M9.918 10H7.082A1.57 1.57 0 0 0 5.5 11.556v5.89A1.569 1.569 0 0 0 7.082 19h2.836a1.569 1.569 0 0 0 1.582-1.555v-5.889a1.569 1.569 0 0 0-1.582-1.555ZM9.918 4H7.082A1.54 1.54 0 0 0 5.5 5.495v1.014A1.54 1.54 0 0 0 7.082 8h2.836A1.54 1.54 0 0 0 11.5 6.508V5.494A1.54 1.54 0 0 0 9.918 4ZM15.082 13h2.835a1.57 1.57 0 0 0 1.583-1.555V5.557A1.569 1.569 0 0 0 17.918 4h-2.836A1.57 1.57 0 0 0 13.5 5.557v5.888A1.569 1.569 0 0 0 15.082 13ZM15.082 19h2.835a1.54 1.54 0 0 0 1.583-1.492v-1.014A1.54 1.54 0 0 0 17.918 15h-2.836a1.54 1.54 0 0 0-1.582 1.493v1.013A1.54 1.54 0 0 0 15.082 19Z" />
                    </g>
                  </svg>
                Dashboard
              </li>
              <li className="flex gap-2 items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <g fill="#333">
                    <path d="M13.5 9.75a.75.75 0 0 0-.75-.75h-6a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 .75-.75ZM12.5 12.75a.75.75 0 0 0-.75-.75h-5a.75.75 0 1 0 0 1.5h5a.75.75 0 0 0 .75-.75ZM12.75 15a.75.75 0 1 1 0 1.5h-6a.75.75 0 0 1 0-1.5h6Z" />
                    <path
                      fillRule="evenodd"
                      d="M6 21.75h13A2.75 2.75 0 0 0 21.75 19v-5.5a.75.75 0 0 0-.75-.75h-3.25V4.943c0-1.423-1.609-2.251-2.767-1.424l-.175.125a2.26 2.26 0 0 1-2.622-.004 3.77 3.77 0 0 0-4.372 0 2.26 2.26 0 0 1-2.622.004l-.175-.125c-1.158-.827-2.767 0-2.767 1.424V18A3.75 3.75 0 0 0 6 21.75ZM8.686 4.86a2.27 2.27 0 0 1 2.628 0 3.76 3.76 0 0 0 4.366.005l.175-.125a.25.25 0 0 1 .395.203V19c0 .45.108.875.3 1.25H6A2.25 2.25 0 0 1 3.75 18V4.943a.25.25 0 0 1 .395-.203l.175.125a3.76 3.76 0 0 0 4.366-.005ZM17.75 19v-4.75h2.5V19a1.25 1.25 0 0 1-2.5 0Z"
                      clipRule="evenodd"
                    />
                  </g>
                </svg>
                Orders
              </li>
              <li className="flex gap-2 items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <g clipPath="url(#a)">
                    <path
                      stroke="#333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 12c-1.124 1.124-5.5 4.5-5.5 4.5M17 12c3-3 3-5 3-8-3 0-5 0-8 3m5 5 .475 2.376a5 5 0 0 1-1.367 4.516l-1.17 1.17a1 1 0 0 1-1.582-.22L11.5 16.5M12 7l-4.5 5.5M12 7l-2.376-.475a5 5 0 0 0-4.516 1.367l-1.17 1.17a1 1 0 0 0 .22 1.582L7.5 12.5m0 0 4 4m4-8-1 1M3 21l3.392-.678A2 2 0 0 0 8 18.36V18a2 2 0 0 0-2-2h-.36a2 2 0 0 0-1.962 1.608L3 21Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                  </defs>
                </svg>
                Performance
              </li>
              <li className="flex gap-2 items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="#333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.245 4.174c.232-.666.347-.999.518-1.091a.5.5 0 0 1 .475 0c.171.092.287.425.518 1.091l1.53 4.402c.066.19.1.285.159.355a.5.5 0 0 0 .195.142c.085.034.185.036.386.04l4.66.096c.705.014 1.057.021 1.198.155a.5.5 0 0 1 .146.452c-.035.191-.315.404-.877.83l-3.714 2.816c-.16.12-.24.181-.289.26a.5.5 0 0 0-.074.229c-.007.092.022.188.08.38l1.35 4.46c.204.676.306 1.013.222 1.188a.5.5 0 0 1-.384.28c-.193.025-.482-.176-1.06-.579l-3.826-2.662c-.165-.114-.247-.172-.337-.194a.5.5 0 0 0-.24 0c-.09.022-.173.08-.337.194L7.718 19.68c-.579.403-.868.604-1.06.578a.5.5 0 0 1-.385-.279c-.084-.175.018-.512.222-1.187l1.35-4.461c.058-.192.087-.288.08-.38a.5.5 0 0 0-.074-.23c-.049-.078-.128-.138-.288-.26l-3.714-2.815c-.562-.426-.843-.639-.878-.83a.5.5 0 0 1 .147-.452c.14-.134.493-.141 1.198-.155l4.66-.095c.2-.005.3-.007.386-.041a.5.5 0 0 0 .195-.142c.059-.07.092-.165.158-.355l1.53-4.402Z"
                  />
                </svg>
                Reviews
              </li>
            </ul>
          </section>

          <section id="Grow your business">
            <h5 className="text-[#6E6E6E] text-xs font-semibold mb-2">Grow your business</h5>

            <ul className="flex flex-col font-semibold text-brand-black gap-1.5 text-lg ">
              <li className="flex gap-2 items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="none"
                    stroke="#333"
                    viewBox="0 -0.5 25 25"
                  >
                    <g
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      clipRule="evenodd"
                    >
                      <path d="M9.918 10H7.082A1.57 1.57 0 0 0 5.5 11.556v5.89A1.569 1.569 0 0 0 7.082 19h2.836a1.569 1.569 0 0 0 1.582-1.555v-5.889a1.569 1.569 0 0 0-1.582-1.555ZM9.918 4H7.082A1.54 1.54 0 0 0 5.5 5.495v1.014A1.54 1.54 0 0 0 7.082 8h2.836A1.54 1.54 0 0 0 11.5 6.508V5.494A1.54 1.54 0 0 0 9.918 4ZM15.082 13h2.835a1.57 1.57 0 0 0 1.583-1.555V5.557A1.569 1.569 0 0 0 17.918 4h-2.836A1.57 1.57 0 0 0 13.5 5.557v5.888A1.569 1.569 0 0 0 15.082 13ZM15.082 19h2.835a1.54 1.54 0 0 0 1.583-1.492v-1.014A1.54 1.54 0 0 0 17.918 15h-2.836a1.54 1.54 0 0 0-1.582 1.493v1.013A1.54 1.54 0 0 0 15.082 19Z" />
                    </g>
                  </svg>
                Dashboard
              </li>
              <li className="flex gap-2 items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <g fill="#333">
                    <path d="M13.5 9.75a.75.75 0 0 0-.75-.75h-6a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 .75-.75ZM12.5 12.75a.75.75 0 0 0-.75-.75h-5a.75.75 0 1 0 0 1.5h5a.75.75 0 0 0 .75-.75ZM12.75 15a.75.75 0 1 1 0 1.5h-6a.75.75 0 0 1 0-1.5h6Z" />
                    <path
                      fillRule="evenodd"
                      d="M6 21.75h13A2.75 2.75 0 0 0 21.75 19v-5.5a.75.75 0 0 0-.75-.75h-3.25V4.943c0-1.423-1.609-2.251-2.767-1.424l-.175.125a2.26 2.26 0 0 1-2.622-.004 3.77 3.77 0 0 0-4.372 0 2.26 2.26 0 0 1-2.622.004l-.175-.125c-1.158-.827-2.767 0-2.767 1.424V18A3.75 3.75 0 0 0 6 21.75ZM8.686 4.86a2.27 2.27 0 0 1 2.628 0 3.76 3.76 0 0 0 4.366.005l.175-.125a.25.25 0 0 1 .395.203V19c0 .45.108.875.3 1.25H6A2.25 2.25 0 0 1 3.75 18V4.943a.25.25 0 0 1 .395-.203l.175.125a3.76 3.76 0 0 0 4.366-.005ZM17.75 19v-4.75h2.5V19a1.25 1.25 0 0 1-2.5 0Z"
                      clipRule="evenodd"
                    />
                  </g>
                </svg>
                Orders
              </li>
              <li className="flex gap-2 items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <g clipPath="url(#a)">
                    <path
                      stroke="#333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 12c-1.124 1.124-5.5 4.5-5.5 4.5M17 12c3-3 3-5 3-8-3 0-5 0-8 3m5 5 .475 2.376a5 5 0 0 1-1.367 4.516l-1.17 1.17a1 1 0 0 1-1.582-.22L11.5 16.5M12 7l-4.5 5.5M12 7l-2.376-.475a5 5 0 0 0-4.516 1.367l-1.17 1.17a1 1 0 0 0 .22 1.582L7.5 12.5m0 0 4 4m4-8-1 1M3 21l3.392-.678A2 2 0 0 0 8 18.36V18a2 2 0 0 0-2-2h-.36a2 2 0 0 0-1.962 1.608L3 21Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                  </defs>
                </svg>
                Performance
              </li>
              <li className="flex gap-2 items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="#333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.245 4.174c.232-.666.347-.999.518-1.091a.5.5 0 0 1 .475 0c.171.092.287.425.518 1.091l1.53 4.402c.066.19.1.285.159.355a.5.5 0 0 0 .195.142c.085.034.185.036.386.04l4.66.096c.705.014 1.057.021 1.198.155a.5.5 0 0 1 .146.452c-.035.191-.315.404-.877.83l-3.714 2.816c-.16.12-.24.181-.289.26a.5.5 0 0 0-.074.229c-.007.092.022.188.08.38l1.35 4.46c.204.676.306 1.013.222 1.188a.5.5 0 0 1-.384.28c-.193.025-.482-.176-1.06-.579l-3.826-2.662c-.165-.114-.247-.172-.337-.194a.5.5 0 0 0-.24 0c-.09.022-.173.08-.337.194L7.718 19.68c-.579.403-.868.604-1.06.578a.5.5 0 0 1-.385-.279c-.084-.175.018-.512.222-1.187l1.35-4.461c.058-.192.087-.288.08-.38a.5.5 0 0 0-.074-.23c-.049-.078-.128-.138-.288-.26l-3.714-2.815c-.562-.426-.843-.639-.878-.83a.5.5 0 0 1 .147-.452c.14-.134.493-.141 1.198-.155l4.66-.095c.2-.005.3-.007.386-.041a.5.5 0 0 0 .195-.142c.059-.07.092-.165.158-.355l1.53-4.402Z"
                  />
                </svg>
                Reviews
              </li>
            </ul>
          </section>

          <section id="Manage your business">
            <h5 className="text-[#6E6E6E] text-xs font-semibold mb-2">Manage your business</h5>

            <ul className="flex flex-col font-semibold text-brand-black gap-1.5 text-lg ">
              <li className="flex gap-2 items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="none"
                    stroke="#333"
                    viewBox="0 -0.5 25 25"
                  >
                    <g
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      clipRule="evenodd"
                    >
                      <path d="M9.918 10H7.082A1.57 1.57 0 0 0 5.5 11.556v5.89A1.569 1.569 0 0 0 7.082 19h2.836a1.569 1.569 0 0 0 1.582-1.555v-5.889a1.569 1.569 0 0 0-1.582-1.555ZM9.918 4H7.082A1.54 1.54 0 0 0 5.5 5.495v1.014A1.54 1.54 0 0 0 7.082 8h2.836A1.54 1.54 0 0 0 11.5 6.508V5.494A1.54 1.54 0 0 0 9.918 4ZM15.082 13h2.835a1.57 1.57 0 0 0 1.583-1.555V5.557A1.569 1.569 0 0 0 17.918 4h-2.836A1.57 1.57 0 0 0 13.5 5.557v5.888A1.569 1.569 0 0 0 15.082 13ZM15.082 19h2.835a1.54 1.54 0 0 0 1.583-1.492v-1.014A1.54 1.54 0 0 0 17.918 15h-2.836a1.54 1.54 0 0 0-1.582 1.493v1.013A1.54 1.54 0 0 0 15.082 19Z" />
                    </g>
                  </svg>
                Dashboard
              </li>
              <li className="flex gap-2 items-center cursor-pointer text-accent border-l-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  id="Icons"
                  width={20}
                  height={20}
                  fill="#000"
                  viewBox="0 0 32 32"
                >
                  <g id="SVGRepo_iconCarrier">
                    <style>
                      {
                        ".st0{fill:none;stroke:#4cb050;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}"
                      }
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="{64}"
                        height="{64}"
                        viewBox="0 0 32 32"
                      >
                        <title>{'{"book-album"}'}</title>
                        <path
                          fill="#4CB0504CB050"
                          d="M30 25c0 1.104-.927 1.656-2 2 0 0-5.443 1.515-11 2.977V5l11-3a2 2 0 0 1 2 2v21Zm-15 4.998C9.538 28.53 4 27 4 27c-1.136-.312-2-.896-2-2V4a2 2 0 0 1 2-2l11 3v24.998ZM28 0s-5.789 1.594-11.05 3c-.659.025-1.323 0-1.983 0C9.955 1.656 4 0 4 0a4 4 0 0 0-4 4v21c0 2.209 1.885 3.313 4 4 0 0 5.393 1.5 10.967 3h2.025C22.612 30.5 28 29 28 29c2.053-.531 4-1.791 4-4V4a4 4 0 0 0-4-4Z"
                        />
                      </svg>
                      {
                        ";stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}"
                      }
                    </style>
                    <path
                      d="M8 9h15c.6 0 1 .4 1 1v18c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1V9l11.6-5.3c.6-.4 1.4.1 1.4.9V9"
                      className="st0"
                    />
                    <path
                      d="M13.4 12h5.3l1.1 2.7c.6 1.6.2 3.4-1.1 4.6h0c-1.5 1.4-3.8 1.4-5.3 0h0c-1.3-1.1-1.7-3-1.1-4.6l1.1-2.7zM16 23.1c0 1.4-.9 2.6-2.3 2.9h4.6"
                      className="st0"
                    />
                    <path d="M16 20.3V23.2c0 1.4.9 2.6 2.3 2.9h0" className="st0" />
                  </g>
                </svg>
                Menu
              </li>
              <li className="flex gap-2 items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <g clipPath="url(#a)">
                    <path
                      stroke="#333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 12c-1.124 1.124-5.5 4.5-5.5 4.5M17 12c3-3 3-5 3-8-3 0-5 0-8 3m5 5 .475 2.376a5 5 0 0 1-1.367 4.516l-1.17 1.17a1 1 0 0 1-1.582-.22L11.5 16.5M12 7l-4.5 5.5M12 7l-2.376-.475a5 5 0 0 0-4.516 1.367l-1.17 1.17a1 1 0 0 0 .22 1.582L7.5 12.5m0 0 4 4m4-8-1 1M3 21l3.392-.678A2 2 0 0 0 8 18.36V18a2 2 0 0 0-2-2h-.36a2 2 0 0 0-1.962 1.608L3 21Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                  </defs>
                </svg>
                Performance
              </li>
              <li className="flex gap-2 items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="#333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.245 4.174c.232-.666.347-.999.518-1.091a.5.5 0 0 1 .475 0c.171.092.287.425.518 1.091l1.53 4.402c.066.19.1.285.159.355a.5.5 0 0 0 .195.142c.085.034.185.036.386.04l4.66.096c.705.014 1.057.021 1.198.155a.5.5 0 0 1 .146.452c-.035.191-.315.404-.877.83l-3.714 2.816c-.16.12-.24.181-.289.26a.5.5 0 0 0-.074.229c-.007.092.022.188.08.38l1.35 4.46c.204.676.306 1.013.222 1.188a.5.5 0 0 1-.384.28c-.193.025-.482-.176-1.06-.579l-3.826-2.662c-.165-.114-.247-.172-.337-.194a.5.5 0 0 0-.24 0c-.09.022-.173.08-.337.194L7.718 19.68c-.579.403-.868.604-1.06.578a.5.5 0 0 1-.385-.279c-.084-.175.018-.512.222-1.187l1.35-4.461c.058-.192.087-.288.08-.38a.5.5 0 0 0-.074-.23c-.049-.078-.128-.138-.288-.26l-3.714-2.815c-.562-.426-.843-.639-.878-.83a.5.5 0 0 1 .147-.452c.14-.134.493-.141 1.198-.155l4.66-.095c.2-.005.3-.007.386-.041a.5.5 0 0 0 .195-.142c.059-.07.092-.165.158-.355l1.53-4.402Z"
                  />
                </svg>
                Reviews
              </li>
            </ul>
          </section>

        </div>

      </div>

    </aside>
  )
}
export default SideBar
