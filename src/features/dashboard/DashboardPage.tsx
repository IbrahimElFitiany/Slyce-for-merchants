import LiveMonitor from "@/features/dashboard/components/LiveMonitor"
import OrdersTrendSummary from "@/features/dashboard/components/OrdersTrendSummary"

function DashboardPage() {

  return (
    <div className="grid grid-cols-2 gap-6">

      <title>{`Slyce · Dashboard`}</title>

      <OrdersTrendSummary branchId="tmp:d325c2b4-2e7f-4c95-a110-bce2dd2d89a9"/>
      <LiveMonitor/>

    </div>
  )

}

export default DashboardPage