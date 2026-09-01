export default function OrdersPageSkeleton() {
  return (

    <div className="my-20 w-[90%] border border-brand-grey rounded-2xl animate-pulse">

      <header className="px-4 py-4 flex items-center justify-between">

        <div className="h-10 w-56 bg-gray-200 rounded-full" />

        <div className="h-10 w-36 bg-gray-200 rounded-full" />

      </header>

      {/* Table Skeleton */}
      <table className="w-full text-left">
        <thead>
          <tr className="border-y border-brand-grey text-sm">
            <th className="py-3 px-6"><div className="h-4 w-12 bg-gray-200 rounded" /></th>
            <th className="py-3 px-6"><div className="h-4 w-24 bg-gray-200 rounded" /></th>
            <th className="py-3 px-6"><div className="h-4 w-20 bg-gray-200 rounded" /></th>
            <th className="py-3 px-6"><div className="h-4 w-20 bg-gray-200 rounded" /></th>
            <th className="py-3 px-6 flex justify-end"><div className="h-4 w-16 bg-gray-200 rounded" /></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-brand-grey border-b border-brand-grey">
          {Array.from({ length: 8 }).map((_, i) => (
            <tr key={i}>
              {/* Order ID */}
              <td className="py-4 px-6">
                <div className="h-4 w-16 bg-gray-200 rounded" />
              </td>
              {/* Order Status Badge */}
              <td className="py-4 px-6">
                <div className="h-6 w-24 bg-gray-200 rounded-full" />
              </td>
              {/* Order Date */}
              <td className="py-4 px-6">
                <div className="h-4 w-28 bg-gray-200 rounded" />
              </td>
              {/* Customer */}
              <td className="py-4 px-6">
                <div className="h-4 w-32 bg-gray-200 rounded" />
              </td>
              {/* Subtotal */}
              <td className="py-4 px-6 flex justify-end">
                <div className="h-4 w-16 bg-gray-200 rounded" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer Skeleton */}
      <footer className="flex items-center justify-between px-6 py-4">

        {/* "Showing X-Y of Z" Text Placeholder */}
        <div className="h-4 w-44 bg-gray-200 rounded" />

        {/* Pagination Skeleton */}
        <div className="flex items-center gap-x-5">

          <div className="flex items-center gap-x-1.5 border border-brand-grey rounded-full p-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-7 h-7 rounded-full bg-gray-200" />
            ))}
          </div>

        </div>

        <div className="h-7 w-16 bg-gray-200 rounded-lg" />
      </footer>

    </div>
  );
}