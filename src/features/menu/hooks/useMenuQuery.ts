import { useQuery } from '@tanstack/react-query';
import { getMerchantMenu } from '../services/menuServices';

export function useMenuQuery() {

  const { data, isLoading, error } = useQuery({
    queryKey: ['menu'],
    queryFn: getMerchantMenu,
    refetchOnWindowFocus: false,
    staleTime: 60 * 1000,
  });

  return { menu: data?.menu, isLoading, error };
}