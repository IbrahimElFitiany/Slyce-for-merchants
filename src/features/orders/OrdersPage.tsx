import { ChevronIcon } from "@/components/icons/ChevronIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import OrderSummaryRow from "./components/OrderSummaryRow";
import useOrdersPage from "./hooks/useOrdersPage";
import OrdersPageSkeleton from "./components/OrdersPageSkeleton";
import OrdersErrorState from "./components/OrdersErrorState";
import { useEffect } from "react";
import { ORDER_STATUS_STYLES, OrderStatus } from "./types.domain";
import { CheckIcon } from "@/components/icons/CheckIcon";
import OrderDrawer from "./components/OrderDetailsDrawer/OrderDrawer";


const FILTERABLE_STATUSES = Object.values(OrderStatus).filter(
  (status) => status !== OrderStatus.Unknown
);

function OrdersPage() {

  const {
    orders,
    selectedOrder,
    status: { isPending, isFetching, isError, refetch },
    filter: { orderStatusFilter, setOrderStatusFilter },
    pagination: {
      currentPage,
      pageSize,
      totalPages,
      totalOrders,
      hasNext,
      hasPrevious,
      showingFrom,
      showingTo,
      setPageNumber,
      setPerPageSize,
      goToNextPage,
      goToPrevPage,
    },
    drawer: { selectedOrderId, setSelectedOrderId }
  } = useOrdersPage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, pageSize]);

  if (isPending) return <OrdersPageSkeleton />;
  if (isError) return <OrdersErrorState onRetry={refetch}/>

  return (
    <>
      <title>Slyce · Orders</title>

      <div className="relative my-20 w-[90%] border-1 border-brand-grey rounded-2xl">

        <header className="px-4 py-4 flex items-center justify-between">

          {/* search bar (not working rn)*/}
          <div className="flex w-full max-w-sm items-center py-2 px-3 gap-x-2 border border-gray-300 rounded-full text-brand-black">
            <SearchIcon />
            <input
              className="focus:outline-0 w-full"
              type="text"
              placeholder="Search by order ID or customer name" />
          </div>

          {/* filtering section */}
          <div className="flex items-center gap-x-3">

            {/* orderStatus Filter */}
            <DropdownMenu.Root modal={false}>

              <DropdownMenu.Trigger asChild>

                <button className="group flex items-center gap-x-2 border border-brand-grey px-4 py-2 rounded-full font-medium focus:outline-0 cursor-pointer">

                  {orderStatusFilter ?? "Order Status"}

                  <ChevronIcon
                    direction="down"
                    className="transition-transform duration-400 group-data-[state=open]:rotate-270"
                  />

                </button>

              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>

                <DropdownMenu.Content
                  side="bottom"
                  align="end"
                  sideOffset={5}
                  className="flex flex-col shadow-xl gap-y-2.5 text-base font-medium bg-whitebg border-1 border-brand-grey p-3 pr-6 rounded-2xl focus:outline-0
                  data-[state=open]:animate-in
                  data-[state=open]:fade-in-0
                  data-[state=open]:zoom-in-95
                  data-[state=closed]:animate-out
                  data-[state=closed]:fade-out-0
                  data-[state=closed]:zoom-out-95
                  duration-200"
                >
                  {FILTERABLE_STATUSES.map((status) => (
                    <DropdownMenu.Item
                      key={status}
                      className="flex items-center gap-x-4 focus:outline-none"
                      onSelect={() => setOrderStatusFilter(status)}
                    >
                      <span
                        className={`${ORDER_STATUS_STYLES[status]} w-fit py-1 px-2.5 rounded-xl cursor-pointer hover:brightness-110 duration-200`}
                      >
                        {status}
                      </span>

                      {orderStatusFilter === status && <CheckIcon className="text-accent"/>}

                    </DropdownMenu.Item>
                  ))}

                  <DropdownMenu.Item
                    className="flex items-center justify-between cursor-pointer focus:outline-none"
                    onSelect={() => setOrderStatusFilter(undefined)}
                  >
                    All statuses
                    {orderStatusFilter === undefined && <CheckIcon className="text-accent"/>}

                  </DropdownMenu.Item>

                </DropdownMenu.Content>

              </DropdownMenu.Portal>

            </DropdownMenu.Root>

          </div>

        </header>

        <table
          className={`w-full text-left ${isFetching ? "opacity-50 pointer-events-none" : "opacity-100"}`}
          aria-busy={isFetching}
        >

          <thead className="[&_th]:font-medium [&_th]:py-3 [&_th]:px-6">

            <tr className="border-y border-brand-grey text-sm  text-text-grey">
              <th>Order</th>
              <th>Order Status</th>
              <th>Order Date</th>
              <th>Customer</th>
              <th>Branch</th>
              <th className="text-right">Subtotal</th>
            </tr>

          </thead>

          <tbody className="divide-y divide-brand-grey last:border-b-1 border-brand-grey">

            {orders?.map((order) => (
              <OrderSummaryRow
                key={order.orderId}
                onClick={() => setSelectedOrderId(order.orderId)}
                orderSummary={order}
              />
            ))}
          </tbody>

        </table>

        <footer className="flex items-center justify-between px-6 py-4">

          {/* showing start - end out of x orders */}
          <p className="text-sm text-text-grey font-medium">
            Showing <span className="font-semibold text-brand-black">{showingFrom}–{showingTo}</span> of{" "}
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


      <OrderDrawer
        isOpen={Boolean(selectedOrderId)}
        onClose={() => setSelectedOrderId(null)}
        orderId={selectedOrderId ?? ""}
        orderStatus={selectedOrder?.orderStatus ?? OrderStatus.Unknown}
        customerName={selectedOrder?.customerName ?? ""}
      />

    </>
  );
}

export default OrdersPage;