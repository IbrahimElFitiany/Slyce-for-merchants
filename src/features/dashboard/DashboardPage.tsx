import LiveMonitor from "@/features/dashboard/components/LiveMonitor"
import OrdersTrendSummary from "@/features/dashboard/components/OrdersTrendSummary"

function DashboardPage() {

  return (
    <div className="flex">
      <OrdersTrendSummary/>
      <LiveMonitor/>
    </div>
  )

}

export default DashboardPage