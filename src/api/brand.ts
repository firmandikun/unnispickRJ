import type { Brand, Paginated } from "../types";
import { api } from "./client";

export async function fetchBrands(
  page = 1,
  perPage = 12
): Promise<Paginated<Brand>> {
  const { data } = await api.get("/brands", {
    params: { page, per_page: perPage },
  });
  return data;
}
