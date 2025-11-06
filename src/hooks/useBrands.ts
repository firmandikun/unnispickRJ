import { useQuery } from "@tanstack/react-query";
import { fetchBrands } from "../api/brand";

export function useBrands(page: number, perPage = 12) {
  return useQuery({
    queryKey: ["brands", page, perPage],
    queryFn: () => fetchBrands(page, perPage),
    staleTime: 60_000,
  });
}
