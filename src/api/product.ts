import type { Paginated, Product } from '../types';
import { api } from './client';
function toNum(v: any, fallback: number) {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

function normalizePaginated<T>(raw: any): Paginated<T> {
  if (raw?.meta && raw?.data) {
    return {
      data: raw.data,
      meta: {
        current_page: toNum(raw.meta.current_page, 1),
        per_page:     toNum(raw.meta.per_page, 5),
        total:        toNum(raw.meta.total, 0),
        last_page:    toNum(raw.meta.last_page, 1),
      },
    };
  }
  return {
    data: raw?.data ?? [],
    meta: {
      current_page: toNum(raw?.current_page, 1),
      per_page:     toNum(raw?.per_page ?? raw?.meta?.per_page, 5),
      total:        toNum(raw?.total ?? raw?.meta?.total, 0),
      last_page:    toNum(raw?.last_page ?? raw?.meta?.last_page, 1),
    },
  };
}

export async function fetchProducts(page=1, perPage=10, brandId?: number): Promise<Paginated<Product>> {
  const params: any = { page, per_page: perPage };
  if (brandId) params.brand_id = brandId;
  const { data } = await api.get('/products', { params });
  return normalizePaginated<Product>(data);
}

export async function fetchProductsByBrand(brandId: number, page=1, perPage=10): Promise<Paginated<Product>> {
  const { data } = await api.get(`/brands/${brandId}/products`, { params: { page, per_page: perPage } });
  return normalizePaginated<Product>(data);
}

export async function fetchProductDetail(id: number): Promise<Product> {
  const { data } = await api.get(`/products/${id}`);
  return data.data ?? data;
}
