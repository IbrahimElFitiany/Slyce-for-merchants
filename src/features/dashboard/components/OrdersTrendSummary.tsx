import { useState } from "react";
import OrdersChart from "@/features/dashboard/components/OrdersChart";
import { ChevronRightIcon } from "@/components/icons/ChevronRightIcon";

function OrdersTrendSummary() {

  const filters = ["Today", "Yesterday","7 Days","30 Days"]

  const TotalOrders = 432;
  const Currency = "EGP"
  const TotalRevenue = 4235.23

  const [active, setActive] = useState(filters[0]);

  return (
    <div className="flex flex-col w-1/2 py-5">

      <div className="flex my-2 font-bold w-full justify-between">

        <p className=" text-brand-black text-2xl">Summary</p>

        <button className="flex gap-x-1 items-center cursor-pointer font-medium text-text-grey">
          <h3>More</h3>
          <ChevronRightIcon size={11}/>
        </button>

      </div>

      <div className="border-1 border-brand-grey rounded-2xl p-3">

        <div className="flex gap-x-2 font-semibold">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`cursor-pointer border rounded-full px-3 py-1 text-sm ${active === f ? "border-accent text-accent": "border-brand-grey text-[#6E6E6E]"}`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="flex mt-4 space-x-7 px-2">

          <div className="flex flex-col">
            <p className="font-normal text-text-grey">Orders</p>
            <p className="font-extrabold text-2xl text-brand-black">{TotalOrders}</p>
          </div>

          <div className="flex flex-col">
            <p className="font-normal text-text-grey">Revenue</p>

            <div className="flex items-baseline gap-x-0.5 font-extrabold text-2xl text-brand-black">
              <p>{TotalRevenue}</p>
              <p className="text-sm text-text-grey">{Currency}</p>
            </div>
          </div>

        </div>

        <OrdersChart/>
      </div>

    </div>
  )
}
export default OrdersTrendSummary