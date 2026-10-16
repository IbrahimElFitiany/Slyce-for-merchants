import { useQuery } from '@tanstack/react-query';
import { getMe } from '@/features/auth/services/authServices';

export function useCurrentUser() {

  const { data: user, isLoading } = useQuery({
    queryKey: ['me'],
    queryFn: getMe,
    retry: false,
    staleTime: Infinity,
  });

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
  };
}