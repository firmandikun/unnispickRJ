import { useQuery } from "@tanstack/react-query";
import { fetchProducts, fetchProductsByBrand } from "../api/product";

export function useProducts(page: number, perPage = 10, brandId?: number) {
  return useQuery({
    queryKey: ["products", { page, perPage, brandId }],
    queryFn: () =>
      brandId
        ? fetchProductsByBrand(brandId, page, perPage)
        : fetchProducts(page, perPage),
    staleTime: 60_000,
  });
}
