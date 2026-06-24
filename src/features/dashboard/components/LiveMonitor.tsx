function LiveMonitor() {
  return (
    <div className="flex flex-col w-[50%]  px-10 py-5">

      <div className="flex my-2 font-bold w-full justify-between">
        <p className=" text-brand-black text-2xl">Live Monitor</p>
        <button>More</button>
      </div>

      <div className="border-1 border-brand-grey rounded-3xl">
        <div className="flex justify-between px10 border-b-1 border-brand-grey">
          OfflineBranch
        </div>
        <div className="flex justify-between px10 border-b-1 border-brand-grey">
          Cancelled Orders
        </div>
        <div className="flex justify-between px10 border-b-1 border-brand-grey">
          1-Star ratings
        </div>
      </div>

    </div>
  )
}
export default LiveMonitor