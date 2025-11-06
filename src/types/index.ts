export type Brand = {
  id: number;
  name: string;
  slug: string;
  logo_url?: string;
  products_count?: number;
};

export type ProductDetail = {
  sku?: string | null;
  stock?: number | null;
  specs?: Record<string, any> | null;
};

export type Product = {
  id: number;
  name: string;
  slug: string;
  description?: string;
  price: number;
  thumbnail_url?: string;
  brand?: Brand;
  detail?: ProductDetail;
};

export type Paginated<T> = {
  data: T[];
  meta: {
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
  };
};
