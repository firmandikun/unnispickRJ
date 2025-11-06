import React from "react";
import { useProducts } from "../hooks/useProducts";
import Pagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  const [page, setPage] = React.useState(1);
  const { data: productData, isLoading } = useProducts(page, 12);

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white border-b border-neutral-100 px-5 py-3">
        <h2 className="text-lg font-semibold text-neutral-800">
          Daftar Produk
        </h2>
      </div>

      {/* Body */}
      <div className="px-5 py-3">
        {isLoading && (
          <p className="text-center text-neutral-400 text-sm mt-10">
            Memuat produk...
          </p>
        )}

        {!isLoading && (
          <div className="grid grid-cols-2 gap-4">
            {productData?.data.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>

      {productData && (
        <div className="px-5 mt-4">
          <Pagination
            page={productData.meta.current_page}
            lastPage={productData.meta.last_page}
            onChange={setPage}
          />
        </div>
      )}
    </div>
  );
}
