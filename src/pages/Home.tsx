import React, { useState } from "react";
import { useBrands } from "../hooks/useBrands";
import { useProducts } from "../hooks/useProducts";
import BrandChip from "../components/BrandChip";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import PerPageSelect from "../components/PerPageSelect";
import HeroBannerSlider from "../components/HeroBannerSlider";

export default function Home() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [activeBrandId, setActiveBrandId] = useState<number | undefined>(
    undefined
  );

  const { data: brandData } = useBrands(1, 5);
  const { data: productData, isLoading } = useProducts(
    page,
    perPage,
    activeBrandId
  );

  const current = Number(productData?.meta?.current_page ?? 1);
  const last = Number(productData?.meta?.last_page ?? 1);

  return (
    <div className="pb-16">
      {/* hero/banner */}
      <section className="px-5 pt-4">
        <HeroBannerSlider />
      </section>

      <section className="px-5 mt-3">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium">Produk</div>
          <PerPageSelect
            value={perPage}
            options={[5, 10, 20]}
            onChange={(v) => {
              setPerPage(v);
              setPage(1);
            }}
          />
        </div>
      </section>

      <section className="px-5 mt-3">
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
          <button
            onClick={() => {
              setActiveBrandId(undefined);
              setPage(1);
            }}
            className={`px-3 py-2 rounded border text-xs font-medium ${
              activeBrandId
                ? "bg-white"
                : "bg-primary text-white border-primary"
            }`}
          >
            Semua
          </button>
          {brandData?.data.map((b) => (
            <BrandChip
              key={b.id}
              brand={b}
              active={activeBrandId === b.id}
              onClick={() => {
                setActiveBrandId(b.id);
                setPage(1);
              }}
            />
          ))}
        </div>
      </section>

      <section className="px-5 mt-3">
        {isLoading && (
          <p className="text-center text-sm text-neutral-500">Memuat...</p>
        )}
        <div className="grid grid-cols-2 gap-3">
          {productData?.data.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {productData && (
          <Pagination
            page={current}
            lastPage={last}
            onChange={(p) => setPage(p)}
          />
        )}
      </section>
    </div>
  );
}
