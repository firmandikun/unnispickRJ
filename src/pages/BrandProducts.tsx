import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

export default function BrandProducts() {
  const { brandId } = useParams();
  const brand = Number(brandId);
  const [page, setPage] = useState(1);
  const { data, isLoading } = useProducts(page, 12, brand);

  return (
    <div className="px-5 pb-16">
      <h2 className="text-lg font-bold pt-4">Produk Brand #{brand}</h2>
      {isLoading && <p className="text-sm text-neutral-500 mt-2">Memuat...</p>}
      <div className="grid grid-cols-2 gap-3 mt-3">
        {data?.data.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      {data && (
        <Pagination
          page={data.meta.current_page}
          lastPage={data.meta.last_page}
          onChange={setPage}
        />
      )}
    </div>
  );
}
