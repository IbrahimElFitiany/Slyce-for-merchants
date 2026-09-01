import Drawer from "@/components/common/Drawer"
import CloseIcon from "@/components/icons/CloseIcon";
import { InfoCircleIcon } from "@/components/icons/InfoCircleIcon";

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  orderId: string;
  orderStatus: string;

}

function OrderDrawer({isOpen, onClose, orderId, orderStatus}:OrderDrawerProps) {

  return (
    <Drawer onClose={onClose} isOpen={isOpen}>

      <header className="flex items-end justify-between gap-x-12 my-6 py-5">

        <h1 className="text-3xl font-bold">Order: <span className="text-2xl">{orderId}</span></h1>

        <button
          type="button"
          className="cursor-pointer p-1.5 rounded-full border-1 border-brand-grey"
          onClick={onClose}
        >
          <CloseIcon />
        </button>

      </header>

      <div>
        <h1>Items

        </h1>
      </div>


      <div>
        <h1>Idks

        </h1>
      </div>

    </Drawer>
  )
}

export default OrderDrawer