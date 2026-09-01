import { ChevronIcon } from "@/components/icons/ChevronIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import OrderSummaryRow from "./components/OrderSummaryRow";
import useOrdersPage from "./hooks/useOrdersPage";
import OrdersPageSkeleton from "./components/OrdersPageSkeleton";
import OrdersErrorState from "./components/OrdersErrorState";
import { useEffect } from "react";

function OrdersPage() {

  const {
    totalOrders,
    pageSize,
    currentPage,
    totalPages,
    hasNext,
    hasPrevious,
    orders,
    isPending,
    isFetching,
    isError,
    refetch,
    setPageNumber,
    setPerPageSize,
    goToNextPage,
    goToPrevPage,
  } = useOrdersPage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, pageSize]);

  if (isPending) return <OrdersPageSkeleton />;

  if (isError) return <OrdersErrorState onRetry={refetch}/>

  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, totalOrders);

  return (
    <div className="relative my-20 w-[90%] border-1 border-brand-grey rounded-2xl">

      <header className="px-4 py-4 flex items-center justify-between">

        <button className="flex items-center py-2 px-3 gap-x-2 border border-gray-300 rounded-full text-brand-black">
          <SearchIcon />
          <input className="focus:outline-0" type="text" placeholder="search orders by Id" />
        </button>

        <div className="flex items-center gap-x-3">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="flex items-center gap-x-2 border border-brand-grey px-4 py-2 rounded-full font-medium">
                Order Status
                <ChevronIcon direction="down" />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content className="flex flex-col gap-y-3 font-medium text-brand-black bg-whitebg border-1 p-3 rounded-2xl my-1 border-brand-grey focus:outline-0">
                <DropdownMenu.Item className="cursor-pointer focus:outline-0" onSelect={() => console.log("zby")}>
                  Pending
                </DropdownMenu.Item>
                <DropdownMenu.Item className="cursor-pointer focus:outline-0" onSelect={() => console.log("zby")}>
                  Preparing
                </DropdownMenu.Item>
                <DropdownMenu.Item className="cursor-pointer focus:outline-0" onSelect={() => console.log("zby")}>
                  Out For Delivery
                </DropdownMenu.Item>
                <DropdownMenu.Item className="cursor-pointer focus:outline-0" onSelect={() => console.log("zby")}>
                  Delivered
                </DropdownMenu.Item>
                <DropdownMenu.Item className="cursor-pointer focus:outline-0" onSelect={() => console.log("zby")}>
                  Cancelled
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>

      </header>

      <table className="w-full text-left">

        <thead className="[&_th]:font-medium">
          <tr className="border-y border-brand-grey text-sm  text-text-grey">
            <th className="py-3 px-6">Order</th>
            <th className="py-3 px-6">Order Status</th>
            <th className="py-3 px-6">Order Date</th>
            <th className="py-3 px-6">Customer</th>
            <th className="py-3 px-6 text-right">Subtotal</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-brand-grey last:border-b-1 border-brand-grey">
          {orders?.map((order) => (
            <OrderSummaryRow
              key={order.orderId}
              onClick={() => console.log(order.orderId)}
              orderSummary={order}
            />
          ))}
        </tbody>

      </table>

      <footer className="flex items-center justify-between px-6 py-4">

        {/* showing start - end out of x orders */}
        <p className="text-sm text-text-grey font-medium">
          Showing <span className="font-semibold text-brand-black">{start}–{end}</span> of{" "}
          <span className="font-semibold text-brand-black">{totalOrders}</span> Orders
        </p>

        {/* pagination */}
        <div className="flex font-medium gap-x-5">

          <button
            className="flex items-center cursor-pointer gap-x-1 disabled:text-text-grey/80 disabled:cursor-not-allowed"
            disabled={!hasPrevious}
            onClick={goToPrevPage}
          >
            <ChevronIcon direction="left" size={15}/>
            Previous
          </button>

          <div className="flex items-center gap-x-1 border border-brand-grey rounded-full p-1.5">

            {Array.from({ length: totalPages ?? 0}, (_, i) => i + 1).map((page) => {
              const isActive = page === currentPage;

              return (
                <button
                  key={page}
                  className={`w-7 h-7 text-xs rounded-full cursor-pointer transition-colors duration-500 ${
                    isActive
                      ? "bg-accent text-whitebg font-bold"
                      : "text-text-grey hover:text-whitebg hover:bg-accent/80"
                  }`}
                  onClick={() => setPageNumber(page)}
                >
                  {page}
                </button>
              );
            })}

          </div>

          <button
            className="flex items-center cursor-pointer gap-x-1 disabled:text-text-grey/80 disabled:cursor-not-allowed"
            disabled={!hasNext}
            onClick={goToNextPage}
          >
            Next
            <ChevronIcon direction="right" size={15}/>
          </button>

        </div>

        {/* Page Size Selector */}
        <div className="flex items-center gap-x-2 text-sm text-text-grey">

          <label htmlFor="rows-per-page-select" className="select-none">
            Rows per page
          </label>

          <select
            id="rows-per-page-select"
            value={pageSize}
            onChange={(e) => setPerPageSize(Number(e.target.value))}
            className="border border-brand-grey px-2.5 py-1 rounded-lg text-sm font-semibold text-brand-black bg-whitebg cursor-pointer transition-colors hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
          >
            {[10, 20, 30, 40, 50].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

      </footer>

    </div>
  );
}

export default OrdersPage;