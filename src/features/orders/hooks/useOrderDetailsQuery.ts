import { useQuery } from "@tanstack/react-query";
import { getOrderDetails } from "../services/ordersServices";

export function useOrderDetailsQuery(orderId:string) {

  const {data:order, isPending, isError} = useQuery({
    queryKey: [orderId],
    queryFn: () => getOrderDetails(orderId),
    enabled: !!orderId
  })

  return {
    order,
    isPending,
    isError,
  }
}