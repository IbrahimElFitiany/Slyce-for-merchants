import { useInfiniteQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";
import { searchIngredients } from "../services/menuServices";

function useIngredientSearch(searchTerm:string, isOpen:boolean) {

  const [debouncedTerm] = useDebounce(searchTerm, 300);

  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["ingredients", debouncedTerm],
    queryFn: ({ pageParam = 1 }) => searchIngredients(debouncedTerm, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    enabled: isOpen && debouncedTerm.trim().length > 0,
  });

  const searchResult = data?.pages.flatMap((page) => page.items) ?? [];

  return {
    debouncedTerm,
    searchResult,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage
  }
}

export default useIngredientSearch