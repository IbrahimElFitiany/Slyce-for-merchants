import { useState } from "react";
import OrdersChart from "@/features/dashboard/components/OrdersChart";
import { ChevronIcon } from "@/components/icons/ChevronIcon";
import { useQuery } from "@tanstack/react-query";
import { getOrdersTrend } from "../services/dashboardService";
import { useNavigate } from "react-router-dom";
import { formatNumber } from "@/utils/formatters";

const FILTERS = [
  { label: "Today", value: "today" },
  { label: "Yesterday", value: "yesterday" },
  { label: "7 Days", value: "7days" },
  { label: "30 Days", value: "30days" },
] as const;

type FilterValue = typeof FILTERS[number]["value"];

interface OrdersTrendSummaryProps {
  branchId:string;
}

function OrdersTrendSummary({ branchId } : OrdersTrendSummaryProps) {

  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<FilterValue>(FILTERS[0].value);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["orders-trend", branchId, activeFilter],
    queryFn: () => getOrdersTrend(branchId, activeFilter),
    staleTime: 0,
  });

  const totalOrders = data?.totalOrders;
  const currency = data?.currency
  const totalRevenue = data?.totalRevenue

  return (
    <div className="flex flex-col py-5">

      <header className="flex my-2 font-bold w-full justify-between">

        <p className=" text-brand-black text-2xl">Summary</p>

        <button
          onClick={() => navigate("/orders") }
          className="flex gap-x-1 items-center cursor-pointer font-medium text-text-grey">
          <h3>More</h3>
          <ChevronIcon size={11}/>
        </button>

      </header>

      <div className="border-1 border-brand-grey rounded-2xl p-3">

        {/* filter capsules*/}
        <div className="flex gap-x-2 font-semibold">

          {FILTERS.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`cursor-pointer border rounded-full px-3 py-1 text-sm ${activeFilter === filter.value ? "border-accent text-accent" : "border-brand-grey text-text-grey"}`}
            >
              {filter.label}
            </button>
          ))}

        </div>

        {isError
        ? <div className="flex flex-col items-center justify-center py-8 gap-y-2">
            <p className="text-sm text-text-grey">Couldn't load orders data</p>
            <button
              onClick={() => refetch()}
              className="text-sm font-semibold text-accent cursor-pointer"
            >
              Retry
            </button>
          </div>
        : <>
            <div className="flex mt-4 space-x-7 px-2">
              <div className="flex flex-col">
                <p className="font-normal text-text-grey">Orders</p>
                <div className="font-extrabold text-2xl text-brand-black">
                  {isLoading ? <div className="mt-1 h-6 w-15 animate-pulse rounded-md bg-gray-200" /> : formatNumber(totalOrders)}
                </div>
              </div>

              <div className="flex flex-col">
                <p className="font-normal text-text-grey">Revenue</p>
                <div className="flex items-baseline gap-x-0.5 font-extrabold text-2xl text-brand-black">
                  {isLoading
                    ? <div className="mt-1 h-6 w-25 animate-pulse rounded-md bg-gray-200" />
                    : <span className="flex items-baseline gap-x-0.5">
                        {formatNumber(totalRevenue)}
                        <p className="text-sm text-text-grey">{currency}</p>
                      </span>
                  }
                </div>
              </div>
            </div>

            <OrdersChart dataPoints={data?.chartData ?? []} isLoading={isLoading} />
          </>
        }

      </div>

    </div>
  )
}
export default OrdersTrendSummary