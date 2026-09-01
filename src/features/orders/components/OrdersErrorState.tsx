import { AlertIcon } from "@/components/icons/AlertIcon";

export default function OrdersErrorState({ onRetry }:{onRetry:()=>void}) {
  return (
    <div className="my-20 w-[90%] border border-brand-grey rounded-2xl flex flex-col items-center justify-center py-20 gap-y-3">
      <AlertIcon size={60} />
      <p className="font-medium">Something went wrong loading your orders</p>
      <button onClick={onRetry} className="px-4 py-2 rounded-full bg-accent text-whitebg">
        Try again
      </button>
    </div>
  );
}