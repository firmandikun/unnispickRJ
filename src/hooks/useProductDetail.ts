import { useQuery } from "@tanstack/react-query";
import { fetchProductDetail } from "../api/product";

export function useProductDetail(id: number) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductDetail(id),
  });
}
