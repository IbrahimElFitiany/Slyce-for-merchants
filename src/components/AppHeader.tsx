function AppHeader() {
  return (
    <header className="flex font-[InterVariable] items-center justify-between mx-10 my-5">

      <h1 className="text-5xl text-brand-black font-bold">Menu</h1>
      <div className="flex gap-3">

        <button className="flex justify-between items-center border-1 font-medium text-lg border-brand-grey px-3 py-1 rounded-full">
          <svg
            width="20"
            height="20"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            fill="#333333"
            stroke="#333333"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="3.072"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>ionicons-v5-e</title>
              <path
                d="M256,80A176,176,0,1,0,432,256,176,176,0,0,0,256,80Z"
                style={{
                  fill: "none",
                  stroke: "#333333",
                  strokeMiterlimit: 10,
                  strokeWidth: 32,
                }}
              />
              <path
                d="M200,202.29s.84-17.5,19.57-32.57C230.68,160.77,244,158.18,256,158c10.93-.14,20.69,1.67,26.53,4.45,10,4.76,29.47,16.38,29.47,41.09,0,26-17,37.81-36.37,50.8S251,281.43,251,296"
                style={{
                  fill: "none",
                  stroke: "#333333",
                  strokeLinecap: "round",
                  strokeMiterlimit: 10,
                  strokeWidth: 28,
                }}
              />
              <circle cx="250" cy="348" r="20" />
            </g>
          </svg>
          <p className="ml-1">Help</p>
        </button>

        <button className="flex items-center justify-center w-10 h-10 border-1 border-brand-grey rounded-full">
          <svg
            fill="#000000"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M10,21h4a2,2,0,0,1-4,0ZM3.076,18.383a1,1,0,0,1,.217-1.09L5,15.586V10a7.006,7.006,0,0,1,6-6.92V2a1,1,0,0,1,2,0V3.08A7.006,7.006,0,0,1,19,10v5.586l1.707,1.707A1,1,0,0,1,20,19H4A1,1,0,0,1,3.076,18.383ZM6.414,17H17.586l-.293-.293A1,1,0,0,1,17,16V10A5,5,0,0,0,7,10v6a1,1,0,0,1-.293.707Z"></path>
            </g>
          </svg>
        </button>

        <button className="w-10 h-10 border border-brand-grey rounded-full overflow-hidden">
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRZc7Z-74fAPVZ3bCLnuYyDb-XhPI-rb9MwcL1d00Sq8B0G_pqijHUMBPGRJeojWLzoUcwygcpIRlBQNHuOwfYzMCF2k1-bkAuJGAicNQ"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </header>
  )
}

export default AppHeader
